import { useState } from "react";

const Signup = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = event => {
        const { name, value } = event.target;
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
                    <button type="submit">Signup</button>
                </div>
            </form>
        </section>
    )
}

export default Signup;