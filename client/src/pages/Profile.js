import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import FriendList from '../components/FriendList';
import FavoriteGamesList from '../components/FavoriteGamesList';
import CommentList from '../components/CommentList';
import Auth from '../utils/auth';


const Profile = () => {

    const [message, setMessage] = useState(null);

    const [addFriend] = useMutation(ADD_FRIEND);

    // get username of logged in user
    const loggedInUser = Auth.getLoggedInUsername();

    // check to see if user is logged in
    const loggedIn = Auth.loggedIn();

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

    const handleAddFriend = async (friendId) => {

        try {
            await addFriend({
                variables: { friendId: friendId }
            })

            setMessage('Friend Added!')

            setTimeout(() => {
                setMessage(null)
            }, 2000)

        } catch (e) {
            console.log(e)
        }
    }

    // if data is still loading, display a loading div
    if (loading) {

        return (
            <div>
                Loading...
            </div>
        )
    }

    // if not loading and data is returned... 
    if (!loading) {

        //check if the user has games
        if (user.games) {

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

            // check if user is loggedIn -- scenario: user has games and there is a logged in user
            if (loggedIn) {
                return (
                    <div>
                        {/* if logged in user = the username in the URL, display one header, if not, display another header and include add friend button */}
                        {loggedInUser === userParam ?
                            <h1>Welcome to your profile, {loggedInUser}!</h1>
                            : <div>
                                <h1>Welcome to {userParam}'s profile!</h1>
                                <button onClick={() => { handleAddFriend(user._id) }}>
                                    + Add Friend
                                </button>
                                {message &&
                                    <div>
                                        <p>{message}</p>
                                    </div>}
                            </div>}
                        {/* if logged in user = the username in the URL, display a link to submit a game or don't if you're on another user's page */}
                        {loggedInUser === userParam ?
                            <Link to='/submitgame'>Didn't see a game you like listed on the all games page? Submit A Game!</Link>
                            : null
                        }

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
            } else {
                // if user is not logged in but there's data to display
                return (
                    <div>
                        <h1>Welcome to {userParam}'s profile!</h1>
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
    }

    // if no data exits...
    if (loggedIn) {
        return (
            <div>
                {/* if logged in user = the username in the URL, display one header, if not, display another header and include add friend button */}
                {loggedInUser === userParam ?
                    <h1>Welcome to your profile, {loggedInUser}!</h1>
                    : <div>
                        <h1>Welcome to {userParam}'s profile!</h1>
                        <button onClick={() => { handleAddFriend(user._id) }}>
                            + Add Friend
                        </button>
                        {message &&
                            <div>
                                <p>{message}</p>
                            </div>}
                    </div>}
                {/* if logged in user = the username in the URL, display a link to submit a game or don't if you're on another user's page */}
                {loggedInUser === userParam ?
                    <Link to='/submitgame'>Didn't see a game you like listed on the all games page? Submit A Game!</Link>
                    : null
                }
                {loggedInUser === userParam ?
                    <div>
                        <p>{loggedInUser}, make some friends!</p>
                        <p>{loggedInUser}, go favorite some games!</p>
                        <p>{loggedInUser}, go comment on some games!</p>
                    </div>
                    :
                    <div>
                        <p>{userParam} has not added any friends!</p>
                        <p>{userParam} has not favorited any games!</p>
                        <p>{userParam} has not commented on any games!</p>
                    </div>
                }
            </div>
        )
    } else {
        return (
            <div>
                <h1>Welcome to {userParam}'s profile!</h1>
                <p>{userParam} has not added any friends!</p>
                <p>{userParam} has not favorited any games!</p>
                <p>{userParam} has not commented on any games!</p>

            </div>
        )
    }
}

export default Profile;