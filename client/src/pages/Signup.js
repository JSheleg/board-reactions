import { useState } from "react";

const Signup = () => {

    const securityQuestions = [
        'In what city were you born?',
        'What is the name of your favorite pet?',
        'What is your mother\'s maiden name?',
        'What high school did you attend?',
        'What was the make of your first car?'
    ]

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        questionOne: '',
        answerOne: '',
        questionTwo: '',
        answerTwo: ''
    })

    const handleChange = event => {
        const { name, value } = event.target;
        console.log(event.target)
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    return (
        <section>
            <h1>Sign Up</h1>

            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        name='username'
                        type="username"
                        id="username"
                        placeholder="Username"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        name='email'
                        type="email"
                        id="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        name='password'
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <select id='security_question_one'>
                        <option value='select'>Select Security Question 1</option>
                        {securityQuestions.map((question, index) => {
                            return <option
                                value={question}
                                key={index}
                            >
                                {question}
                            </option>
                        })}
                    </select>
                    <label htmlFor="answerOne"></label>
                    <input
                        name='answerOne'
                        type="answerOne"
                        id="answerOne"
                        placeholder="Answer One"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <select id='security_question_two'>
                        <option value='select'>Select Security Question 2</option>
                        {securityQuestions.map((question, index) => {
                            return <option
                                value={question}
                                key={index}
                            >
                                {question}
                            </option>
                        })}
                    </select>
                    <label htmlFor="answerTwo"></label>
                    <input
                        name='answerTwo'
                        type="answerTwo"
                        id="answerTwo"
                        placeholder="Answer Two"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Signup</button>
                </div>
            </form>
        </section>
    )
}

export default Signup;