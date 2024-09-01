import logo from '../assets/LOGO.png'
import '../styles/Header.css'
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();  
  
    return(
        <div className="header">
            <Link to="/">
                <img src={logo} alt="Kasa logo" className="logo" />
            </Link>
            <i className="nav-list">
                <li className={`accueil ${location.pathname === '/' ? 'accueil accueil-underline' : "accueil"}`}><Link to={`/`}>Accueil</Link></li>
                <li className={`a-propos ${location.pathname === '/a-propos' ? "a-propos a-propos-underline" : "a-propos"}`}><Link to={`/a-propos`}>A Propos</Link></li>
            </i>
        </div>
    );
}


