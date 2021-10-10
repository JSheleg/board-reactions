import { useState } from 'react';
import { Link } from 'react-router-dom';

import SecurityQuestions from '../components/SecurityQuestions';


const ForgotPW = () => {
    const [formState, setFormState] = useState({
        username: null,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <section>
            <Link to="/login">← Remember Password? Go to Login</Link>
            <h1>Forgot Password</h1>

            <section>
                <div>
                    <label htmlFor="username"></label>
                    <input
                        name='username'
                        type="username"
                        id="username"
                        placeholder="Enter your username"
                        onBlur={handleChange}
                    />
                </div>
                {/* 
                <div>
                    <label htmlFor="password-login">Password:</label>
                    <input
                        name='password'
                        type="password"
                        id="password-login"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div> */}
                {/* {error ? (
                    <div>
                        <p>The provided credentials are incorrect</p>
                    </div>
                ) : null} */}

                <br />

                {formState.username ? (
                    <div>
                        <SecurityQuestions username={formState.username}/>
                    </div>
                ) : null}
            </section>
        </section>
    )
}

export default ForgotPW;