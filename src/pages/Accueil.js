import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import imageBanner from '../assets/_Section 1.png'
import '../styles/Accueil.css'

export default function Accueil() {
    return(
        <div className="container">
            <Header />
            <div className="content">
            <img src={imageBanner} alt="banner" className="image-banner"></img>
            <Card />
            </div>
            <Footer />
        </div>
    )
}