import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul>
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
    )
}

export default Nav;