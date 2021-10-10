import { useQuery, useMutation } from '@apollo/client';

import { UPDATE_PASSWORD } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';

const SecurityQuestions = (props) => {

    const { loading, data, error } = useQuery(QUERY_USER, {
        variables: { username: props.username }
    })

    if(!loading) {
        console.log(data)
    }

    return(
        <div>
            Hello
        </div>
    )
}

export default SecurityQuestions;