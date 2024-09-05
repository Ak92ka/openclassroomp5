import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Annonce.css'
import annonces from '../datas/annonces.json'
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';





export default function SlideShow() {
    let {id}= useParams();
    const annonce = annonces.find(annonce => annonce.id === id)

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === annonce.pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? annonce.pictures.length - 1 : prevIndex - 1
        );
    };

    return(
        <div className="slide-show-container">
            <img src={annonce.pictures[currentImageIndex]} alt="annonce cover" className="annonce-page-cover"></img>
            {annonce.pictures.length > 1 && (
                <>
                    <span onClick={nextImage}>
                        <FontAwesomeIcon icon={faChevronRight} className="chevron chevron-right"/>
                    </span>
                    <span onClick={prevImage}>
                        <FontAwesomeIcon icon={faChevronLeft} className="chevron chevron-left"/>
                    </span>
                    <span className="slideshow-total">
                        {currentImageIndex + 1}/{annonce.pictures.length}
                    </span>
                </>
            )}
        </div>
    )
}