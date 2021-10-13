import { useState } from 'react';
import { useQuery} from '@apollo/client';

import { QUERY_USER } from '../../utils/queries';
import UpdatePw from '../UpdatePw';

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

    return (
        <section>
            <div>
                <label htmlFor="answerOne">{user.questionOne}</label>
                <input
                    name='answerOne'
                    type="answerOne"
                    id="answerOne"
                    placeholder="Answer"
                    onBlur={handleChange}
                />
            </div>
            <div>
                <label htmlFor="answerTwo">{user.questionTwo}</label>
                <input
                    name='answerTwo'
                    type="answerTwo"
                    id="answerTwo"
                    placeholder="Answer"
                    onBlur={handleChange}
                />
            </div>
            <div id='update_pw_div'>
            {formState.answerOne === user.answerOne && formState.answerTwo === user.answerTwo ? (
                <UpdatePw username={props.username}/>
            ) : formState.answerOne === '' || formState.answerTwo === '' ? 
            null 
            : (
                <p>Incorrect Security Answers. Please Try Again.</p>
            )}
            </div>
        </section>
    )
}

export default SecurityQuestions;