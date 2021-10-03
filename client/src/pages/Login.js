import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [formState, setFormState] = useState({ username: '', password: '' })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });

        console.log(formState.username)
    };

    return (
        <section>
            <h1>Sign in</h1>

            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        name='username'
                        type="text"
                        id="username"
                        placeholder="Username"
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