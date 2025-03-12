import logements from "../../data/logements.json"
import { useParams } from "react-router-dom"
import "../../styles/description.scss"

function TitreLogement(){
    const {id} = useParams()
    console.log(id)
    const logement = logements.find((logement) => logement.id === id)
    return(
        <div>
                <h2 className="titre-logement">{logement.title}</h2>
                <p className="location">{logement.location}</p>
            </div>
    )
}

export default TitreLogement