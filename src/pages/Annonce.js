import annonces from '../datas/annonces.json'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Annonce.css'
import { Routes, Route, useParams } from 'react-router-dom';
import React, {useState} from 'react';
import Rating from '../components/Rating';

export default function Annonce() {
    let {id}= useParams();
    console.log(id)
    const [rating, setRating] = useState(0)
    return(
        <div>
            <Header />
            {annonces.filter(annonce => annonce.id === id).map(annonce => (
                <div key={annonce.id} className="annonce-container">
                    <img src={annonce.cover} alt="annonce cover" className="annonce-page-cover"></img>
                    <div className="annonce-container2">
                        <div className='annonce-left'>
                            <h1 className='annonce-h1'>{annonce.title}</h1>
                            <h2 className='annonce-h2'>{annonce.location}</h2>
                            {annonce.tags.map((tag) => (
                                <span key={tag} className="annonce-tags">{tag}</span>
                            ))}<br />                  
                            <span>description</span><br />
                        </div>
                        <div className='annonce-right'>
                            <span className="host-name">{annonce.host.name} <img src={annonce.host.picture} alt="host pic" className="host-image"></img></span>
                            <br />
                            <Rating rating={annonce.rating} setRating={setRating}/>
                            <span>equipments</span><br />
                        </div>
                    </div>
                </div>
        ))}
            
            <Footer />
        </div>
    )
}