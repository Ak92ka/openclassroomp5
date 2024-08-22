import logo from '../assets/LOGO-footer.png'
import '../styles/Footer.css'


export default function Footer() {
    return(
        <div className="footer">
            <img src={logo} alt="logo Kasa" className="logo-footer"></img>
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </div>
    )
}