import logo from '../assets/LOGO.png'
import '../styles/Header.css'
import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="header">
            <Link to="/">
                <img src={logo} alt="Kasa logo" className="logo" />
            </Link>
            <i className="nav-list">
                <li className="accueil"><Link to={`/`}>Accueil</Link></li>
                <li className="a-propos"><Link to={`/a-propos`}>A Propos</Link></li>
            </i>
        </div>
    );
}


