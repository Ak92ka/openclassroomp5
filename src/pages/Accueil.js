import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import imageBanner from '../assets/Banner 1.png'

export default function Accueil() {
    return(
        <div>
        <div className="container">
            <Header />
            <div className="content">
            <div className="banner-container">
                <img src={imageBanner} alt="banner" className="image-banner"></img>
                <div className="overlay-text">Chez vous, partout et ailleurs</div>
            </div>
            <Card />
            </div>
        </div>
        <Footer />
        </div>
    )
}