import '../styles/Card.css'
import annonces from '../datas/annonces.json'

export default function Card() {
    return(
        <div>
            <div className="gallery">
                {
                    annonces.map(annonce => (
                        <a href={`/annonce/${annonce.id}`} className="card" key={annonce.id}>
                            <img src={annonce.cover} alt="annonce cover" className="annonce-cover"></img>
                            <span className="card-titre" style={{bottom: annonce.title.length > 35 ? "6px" : annonce.title.length < 35 ? "22px" : "initial"}}>
                                {annonce.title}
                            </span>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}