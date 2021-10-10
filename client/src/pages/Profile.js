import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';

const Profile = () => {
    return(
        <div>
            <Link to='/submitgame'>Submit A Game!</Link>
        </div>
    )
}

export default Profile;