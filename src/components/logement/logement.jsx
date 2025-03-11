import { Link } from 'react-router-dom'
import "../../styles/logement-item.scss"

function Logement({id, title, cover}){
    return(
        <li key={id} className="logement">
            <Link to={`/logement/${id}`}>
            <img src={cover} alt={title} className="logement-cover"/>
            <div className='overlay'></div>
            <h2 className="logement-text">{title}</h2>
            </Link>    
        </li>
    )
}

export default Logement