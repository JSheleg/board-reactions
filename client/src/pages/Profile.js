import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USERS } from '../utils/queries';

const Profile = () => {

    const { username: userParam } = useParams();

    console.log('userParam', userParam)

    const {loading, data} = useQuery(QUERY_USERS)

    if(loading) {
        return(
            <div>
                Loading...
            </div>
        )
    }

    if(!loading) {
        const userData = data.users.findIndex(user => user.username === userParam)

        console.log('index of user', userData)
        console.log('data array', data)
        console.log('user', data.users[51])

        return(
            <div>
                <Link to='/submitgame'>Submit A Game!</Link>
            </div>
        )
    }
}

export default Profile;