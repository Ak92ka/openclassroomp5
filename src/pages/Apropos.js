import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageBanner from '../assets/_Section 2.png'
import '../styles/Accueil.css'
import Collapse from '../components/Collapse';

export default function Apropos() {
    return(
        <div className="container">
            <Header />
            <div className="content">
                <img src={ImageBanner} alt="banner" className="image-banner"></img>
            </div>
            <div>
                <Collapse title={"Fiabilité"}>
                    <p>Les annonces</p>
                </Collapse>
                <Collapse title={"Respect"}>
                    <p>Les annonces</p>
                </Collapse>
                <Collapse title={"Service"}>
                    <p>Les annonces</p>
                </Collapse>
                <Collapse title={"Sécurité"}>
                    <p>Les annonces</p>
                </Collapse>
            </div>
            <Footer />
        </div>
    )
}