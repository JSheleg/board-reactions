import { Link } from 'react-router-dom';

const FriendList = ({ friendCount, username, friends }) => {
    if (!friends || !friends.length) {
      return <p>{username}, make some friends!</p>;
    }

    console.log('friends', friends)

    const removeFriend = (friendId) => {

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
          <button onClick={removeFriend(friend._id)}>
          - Remove Friend
          </button>
          </div>
        ))}
      </div>
    );
  };

  export default FriendList;