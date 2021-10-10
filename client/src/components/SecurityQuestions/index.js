import { useQuery, useMutation } from '@apollo/client';

import { UPDATE_PASSWORD } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';

const SecurityQuestions = (props) => {

    const { loading, data, error } = useQuery(QUERY_USER, {
        variables: { username: formState.username }
    })

    console.log(loading)

    if(!loading) {
        console.log(data)
    }

    return(
        <div>
            This is the SecurityQuestions page
        </div>
    )
}

export default SecurityQuestions;