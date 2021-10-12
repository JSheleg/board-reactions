import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';
import FriendList from '../components/FriendList';

const Profile = () => {

    const { username: userParam } = useParams();

    console.log('userParam', userParam)

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
        console.log('user data', user)
        return (
            <div>
                <Link to='/submitgame'>Submit A Game!</Link>
                <FriendList
                    username={user.username}
                    friendCount={user.friendCount}
                    friends={user.friends}
                />
            </div>
        )
    }
}

export default Profile;