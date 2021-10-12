import { Link } from "react-router-dom";
import './index.css';

import Auth from '../../utils/auth';

const loggedInUsername = Auth.getLoggedInUsername();

const Nav = () => {
    return (
        <div>
            <input type="checkbox" id="toggle" name="toggle"></input>
            <ul className="navigation-menu">
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/' onClick={() => Auth.logout()}>
                        Logout
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to='/games'>
                        Games
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
                <li>
                    {/* we will set this to logged in user eventually */}
                    <Link to={`/profile/${loggedInUsername}`}>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to='/submitgame'>
                        Add Game
                    </Link>
                </li>
                <li>
                    <Link to='/donate'>
                        Donations
                    </Link>
                </li>
            </ul>

            <div className="navbar">
                <label for="toggle"><i className="fa fa-bars text-right"></i></label>
            </div>

        </div>
    )
}

export default Nav;