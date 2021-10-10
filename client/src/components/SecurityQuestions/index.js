import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { UPDATE_PASSWORD } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';

const SecurityQuestions = (props) => {

    const { loading, data, error } = useQuery(QUERY_USER, {
        variables: { username: props.username }
    })

    const [formState, setFormState] = useState({
        answerOne: '',
        answerTwo: ''
    })

    const user = data?.user || {};

    console.log(user)

    if (loading) {
        return (
            <div>
                Loading....
            </div>
        )
    }

    if (!user.username) {
        return (
            <div>
                Username not found in system.
            </div>
        )
    }

    // collect user inputs
    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const handleFormSubmit = event => {
        
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="answerOne">{user.questionOne}</label>
                <input
                    name='answerOne'
                    type="answerOne"
                    id="answerOne"
                    placeholder="Answer"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="answerTwo">{user.questionTwo}</label>
                <input
                    name='answerTwo'
                    type="answerTwo"
                    id="answerTwo"
                    placeholder="Answer"
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default SecurityQuestions;