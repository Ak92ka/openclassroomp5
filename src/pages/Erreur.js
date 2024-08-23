import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Erreur.css'
import { Link } from 'react-router-dom';



export default function Erreur() {
    return(
        <div className="container">
            <Header />
            <div className="content">
                <h1 className="h1-erreur">404</h1>
                <h2 className='h2-erreur'>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/">
                    <span className='lien-accueil'>Retourner sur la page d'accueil</span>
                </Link>
            </div>
            <Footer />
        </div>
    )
}