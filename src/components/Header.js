import logo from '../assets/LOGO.png'
import '../styles/Header.css'
import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="header">
            <img src={logo} alt="Kasa logo" className="logo" />
            <i className="nav-list">
                <li className="accueil">Accueil</li>
                <li className="a-propos"><Link to={`a-propos`}>A Propos</Link></li>
            </i>
        </div>
    );
}


