import './styles.css';
import { ReactComponent as Logo} from './logo.svg';

function Navbar() {
    return (
        //nav código mais semântico do que div para navbar
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;