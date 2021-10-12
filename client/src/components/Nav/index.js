import { Link } from "react-router-dom";
import "./index.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import Auth from "../../utils/auth";
import { grey } from "@mui/material/colors";

const Nav = () => {
  return (
    <div>
      <input type="checkbox" id="toggle" name="toggle" />
      <ul className="navigation-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/" onClick={() => Auth.logout()}>
            Logout
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {/* we will set this to logged in user eventually */}
          <Link to="/profile/:username">Profile</Link>
        </li>
        <li>
          <Link to="/submitgame">Add Game</Link>
        </li>
        <li>
          <Link to="/donate">Donations</Link>
        </li>
      </ul>
      <Box sx={{ flexGrow: 1 }} name="toggle">
        <Grid
          container
          spacing={0}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={1} key="menubar" bgcolor="primary.main" p="20px">
            <label for="toggle">
              <MenuIcon sx={{ color: grey[50], fontSize: 50 }} />
            </label>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Nav;
