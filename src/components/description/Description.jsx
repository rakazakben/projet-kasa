import logements from "../../data/logements.json"
import { useParams } from "react-router-dom"
import "../../styles/description.scss"
import Hote from "./hote"

function Description(){
    const {id} = useParams()
    console.log(id)
    const logement = logements.find((logement) => logement.id === id)
    return(
        <div className="logement-description">
            <div>
                <h2 className="titre-logement">{logement.title}</h2>
                <p>{logement.location}</p>
            </div>
            <Hote/>
            

        </div>
    )
}

export default Description