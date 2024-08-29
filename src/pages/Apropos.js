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
                    <p>Les annonces postée sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Collapse>
                <Collapse title={"Respect"}>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse title={"Service"}>
                    <p>La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
                </Collapse>
                <Collapse title={"Sécurité"}>
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collapse>
            </div>
            <Footer />
        </div>
    )
}