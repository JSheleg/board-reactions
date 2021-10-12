import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section>
      <Box component="form" sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <h5>
            <Link to="/signup">
              <Grid item xs={12} m=".5rem">
                ← New User? Go to Signup
              </Grid>
            </Link>
          </h5>

          <Grid item xs={12}>
            <h1>Sign in</h1>
          </Grid>

          <Grid item xs={12}>
            <form onSubmit={handleFormSubmit}>
              <Item>
                {/* <label htmlFor="email">Email:</label>
              <input
                name="email"
                type="text"
                id="email"
                placeholder="email"
                onChange={handleChange}
              /> */}
                <TextField
                  id="email"
                  label="Email"
                  placeholder="Email"
                  variant="filled"
                  onChange={handleChange}
                  name="email"
                />
              </Item>

              <Item>
                <TextField
                  id="password-login"
                  label="Password"
                  placeholder="Password"
                  variant="filled"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                />
                </Item>
                <Item>
                {error ? (
                  <div>
                    <h7 className="error-message">The provided credentials are incorrect</h7>
                  </div>
                ) : null}
              </Item>

              <Item>
                  {/* <button type="submit">Login</button> */}
                  <Button onClick={handleFormSubmit} variant="contained" color="success">
                    Login
                  </Button>
              </Item>
              <Item>
                <h5>
                  <Link to="/forgotpassword">Forgot My Password</Link>
                </h5>
              </Item>
            </form>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Login;
