import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';
import FriendList from '../components/FriendList';
import FavoriteGamesList from '../components/FavoriteGamesList';


const Profile = () => {

    const { username: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
        variables: {
            username: userParam
        }
    })

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
        // create a variable called favoritedGames and filter out any games where favorite Count is 0;
        const favoriteGames = user.games.filter(game => game.favoritesCount !== 0);
        
        for(let i = 0; i < favoriteGames.length; i++) {
            for(let j = 0; j < favoriteGames[i].favorites.length; j++) {
                if(favoriteGames[i].favorites[j].username === userParam) {
                    userFavoriteGames.push(favoriteGames[i])
                }
            }
        }

        const commentedGames = user.games.filter(game => game.commentCount !==0);

        for(let i = 0; i < commentedGames.length; i++) {
            for(let j = 0; j < commentedGames[i].comments.length; j++) {
                if(commentedGames[i].comments[j].username === userParam) {
                    userCommentedGames.push(commentedGames[i])
                }
            }
        }


        console.log('user data', user)
        console.log('commentGames', commentedGames)
        console.log('userCommentGames', userCommentedGames)
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
            </div>
        )
    }
}

export default Profile;