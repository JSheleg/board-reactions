import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';
import FriendList from '../components/FriendList';
import FavoriteGamesList from '../components/FavoriteGamesList';
import CommentList from '../components/CommentList';


const Profile = () => {

    //pull username from url
    const { username: userParam } = useParams();

    // query user data with username
    const { loading, data } = useQuery(QUERY_USER, {
        variables: {
            username: userParam
        }
    })

    //set data to variable user
    const user = data?.user || {};

    if (loading) {

        return (
            <div>
                Loading...
            </div>
        )
    }

    if (!loading) {
        let userFavoriteGames = []
        let userCommentedGames = []

        // create a variable called favoriteGames and filter out any games where favorite Count is 0;
        const favoriteGames = user.games.filter(game => game.favoritesCount !== 0);

        // for all the games that have favorites, push only the games the current user favorited to userFavoriteGames array
        for (let i = 0; i < favoriteGames.length; i++) {
            for (let j = 0; j < favoriteGames[i].favorites.length; j++) {
                if (favoriteGames[i].favorites[j].username === userParam) {
                    userFavoriteGames.push(favoriteGames[i])
                }
            }
        }

        // create a variable called commentedGames and filter out any games where comment Count is 0;
        const commentedGames = user.games.filter(game => game.commentCount !== 0);

        // for all the games that have comments, push only the games the current user commented on to usercommentedGames array
        for (let i = 0; i < commentedGames.length; i++) {
            for (let j = 0; j < commentedGames[i].comments.length; j++) {
                if (commentedGames[i].comments[j].username === userParam) {
                    userCommentedGames.push(commentedGames[i])
                }
            }
        }

        return (
            <div>
                <Link to='/submitgame'>Submit A Game!</Link>
                <FriendList
                    username={user.username}
                    friendCount={user.friendCount}
                    friends={user.friends}
                />
                <FavoriteGamesList
                    username={user.username}
                    games={userFavoriteGames}
                />
                <CommentList
                    username={user.username}
                    games={userCommentedGames}
                />
            </div>
        )
    }
}

export default Profile;