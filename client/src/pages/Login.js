import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {

    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: {
                    username: formState.username,
                    password: formState.password
                }
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section>
            <Link to="/signup">← New User? Go to Signup</Link>
            <h1>Sign in</h1>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        name='username'
                        type="text"
                        id="username"
                        placeholder="username"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="password-login">Password:</label>
                    <input
                        name='password'
                        type="password"
                        id="password-login"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p>The provided credentials are incorrect</p>
                    </div>
                ) : null}
                <div>
                    <button type="submit">Login</button>
                </div>

                <br />
                <div>
                    <Link to='/forgotpassword'>
                        Forgot My Password
                    </Link>
                </div>
            </form>
        </section>
    )
}

export default Login;