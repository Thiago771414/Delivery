import './styles.css';
import { ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        //nav código mais semântico do que div para navbar
        //<a href="home" className="logo-text">DS Delivery</a>
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">DS Delivery</Link>         
        </nav>
    )
}

export default Navbar;