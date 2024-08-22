import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import imageBanner from '../assets/_Section 1.png'

export default function Accueil() {
    return(
        <div>
            <Header />
            <img src={imageBanner} alt="banner" className="image-banner"></img>
            <Card />
            <Footer />
        </div>
    )
}