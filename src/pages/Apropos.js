import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageBanner from '../assets/_Section 2.png'
import '../styles/Accueil.css'


export default function Apropos() {
    return(
        <div className="container">
            <Header />
            <div className="content">
                <img src={ImageBanner} alt="banner" className="image-banner"></img>
            </div>
            <Footer />
        </div>
    )
}