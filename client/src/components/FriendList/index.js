import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { REMOVE_FRIEND } from '../../utils/mutations';
import Auth from '../../utils/auth';

const FriendList = ({ friendCount, username, friends }) => {

  const [deleteFriend] = useMutation(REMOVE_FRIEND);

    if (!friends || !friends.length) {
      return <p>{username}, make some friends!</p>;
    }

    // get username of logged in user
    const loggedInUser = Auth.getLoggedInUsername();

    console.log('friends', friends)

    const removeFriend = async (friendId) => {

      console.log('remove friend method is running')

      try {
        await deleteFriend({
          variables: {friendId: friendId}
        })
      } catch (e) {
        console.log(e)
      }
    }
  
    return (
      <div>
        <h5>
          {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
        </h5>
        {friends.map(friend => (
          <div key={friend._id}>
          <button>
            <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
          </button>
          {/* check to see if username equals the logged in user - if does, include remove friend btn */}
          {username === loggedInUser ? 
          <button onClick={() => {removeFriend(friend._id)}}>
          - Remove Friend
          </button> 
          : null}
          </div>
        ))}
      </div>
    );
  };

  export default FriendList;