import logements from "../../data/logements.json"
import { useParams } from "react-router-dom"
import "../../styles/description.scss"
import Hote from "./hote"
import Tags from "./Tags"
import TitreLogement from "./titre"
import Notes from "./Notes"
import Collapse from "./Collapse"

function Description(){
    const {id} = useParams()
    const logement = logements.find((logement) => logement.id === id)
    return(
    <div>
        <div className="logement-description">
            <div className="titre-tags">
                <TitreLogement/>
                <Tags/>
            
            </div>
            <div className="hote-notes">
                <Hote/>
                <Notes rating={Number(logement.rating)}/>
            </div>
        </div>
        <div className="collapses">
            <Collapse titre="Description" contenu={logement.description}/>
            <Collapse titre="Equipements" contenu={logement.equipments}/>
        </div>
    </div>
        
    )
}

export default Description