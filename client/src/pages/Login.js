import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {

    const [formState, setFormState] = useState({ email: '', password: '' });
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
                    email: formState.email,
                    password: formState.password
                }
            });

            const username = mutationResponse.data.login.user.username
            const token = mutationResponse.data.login.token;
            Auth.login(token, username);
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
                    <label htmlFor="email">Email:</label>
                    <input
                        name='email'
                        type="text"
                        id="email"
                        placeholder="email"
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