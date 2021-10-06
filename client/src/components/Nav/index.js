import { Link } from "react-router-dom";
import './index.css';

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
                <Link to='/profile/:username'>
                    Profile
                </Link>
            </li>
            <li>
                <Link to='/donate'>
                    Donations
                </Link>
            </li>
        </ul>

        <div class="navbar">
  <label for="toggle"><i class="fa fa-bars"></i> Menu</label>
</div>

        </div>
    )
}

export default Nav;