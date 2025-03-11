import { Link } from 'react-router-dom'
import "../../styles/logement.scss"

function Logement({id, title, cover}){
    return(
        <li key={id} className="logement">
            <Link to={`/logement/${id}`}>
            <img src={cover} alt={title} className="logement-cover"/>
            <h2 className="logement-text">{title}</h2>
            </Link>    
        </li>
    )
}

export default Logement