import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [formState, setFormState] = useState({ email: '', password: '' })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <section>
            <Link to="/signup">← New User? Go to Signup</Link>
            <h1>Sign in</h1>

            <form>
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