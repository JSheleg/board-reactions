import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const ForgotPW = () => {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
        answerOne: '',
        answerTwo: ''
    });

    const [toggleSecurityQuestions, setToggleSecurityQuestions] = useState('false');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();



    }

    return (
        <section>
            <Link to="/login">← Remember Password? Go to Login</Link>
            <h1>Forgot Password</h1>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="username"></label>
                    <input
                        name='username'
                        type="username"
                        id="username"
                        placeholder="Enter your username"
                        onChange={handleChange}
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
                <div>
                    <button type="submit">Submit</button>
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

export default ForgotPW;