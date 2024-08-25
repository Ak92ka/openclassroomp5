import annonces from '../datas/annonces.json'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Annonce.css'
import { useParams } from 'react-router-dom';
import React, {useState} from 'react';
import Rating from '../components/Rating';
import Erreur from './Erreur';
import SlideShow from '../components/SlideShow';

export default function Annonce() {
    let {id}= useParams();
    const [setRating] = useState(0)

    const annonce = annonces.find(annonce => annonce.id === id)
    if(!annonce) {
        return(<Erreur />)
    }
    return(
        <div>
            <Header />
                <div className="annonce-container">
                    <SlideShow />                    
                    <div className="annonce-container2">
                        <div className='annonce-left'>
                            <h1 className='annonce-h1'>{annonce.title}</h1>
                            <h2 className='annonce-h2'>{annonce.location}</h2>
                            {annonce.tags.map((tag) => (
                                <span key={tag} className="annonce-tags">{tag}</span>
                            ))}<br />                  
                            <span className="annonce-description">description</span><br />
                        </div>
                        <div className='annonce-right'>
                            <span className="host-name">{annonce.host.name} <img src={annonce.host.picture} alt="host pic" className="host-image"></img></span>
                            <br />
                            <Rating rating={annonce.rating} setRating={setRating}/>
                            <span>equipments</span><br />
                        </div>
                    </div>
                </div>            
            <Footer />
        </div>
    )
}