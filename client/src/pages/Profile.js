import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';

const Profile = () => {

    const { username: userParam } = useParams();

    console.log('userParam', userParam)

    const { loading, data } = useQuery(QUERY_USER, {
        variables: {
            username: userParam
        }
    })

    if (loading) {
        
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (!loading) {
        console.log('user data', data)
        return (
            <div>
                <Link to='/submitgame'>Submit A Game!</Link>
            </div>
        )
    }
}

export default Profile;