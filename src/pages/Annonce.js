import annonces from '../datas/annonces.json'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Annonce.css'
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import Erreur from './Erreur';
import SlideShow from '../components/SlideShow';
import Collapse from '../components/Collapse';


export default function Annonce() {
    let { id } = useParams();

    const annonce = annonces.find(annonce => annonce.id === id)
    if (!annonce) {
        return (<Erreur />)
    }
    return (
        <div>
            <div className="container">
            <Header />
            <div className="annonce-container">
                <SlideShow />
                <div className="annonce-container2">
                    <div className='annonce-left'>
                        <h1 className='annonce-h1'>{annonce.title}</h1>
                        <h2 className='annonce-h2'>{annonce.location}</h2>
                        <div className="annonce-tags-container">
                        {annonce.tags.map((tag) => (
                            <span key={tag} className="annonce-tags">{tag}</span>
                        ))}<br />
                        </div>
                    </div>
                    <div className='annonce-right'>
                        <span className="host-name">{annonce.host.name} <img src={annonce.host.picture} alt="host pic" className="host-image"></img></span>
                        <br />
                        <Rating rating={annonce.rating} />
                    </div>
                </div>
                <div className='annonce-collapse'>
                        <Collapse title="Description">
                            <p>{annonce.description}</p>
                        </Collapse>
                        <Collapse title="Équipments" isArray="true">
                            {annonce.equipments}
                        </Collapse>
                    </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}