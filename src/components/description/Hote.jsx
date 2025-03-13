import logements from "../../data/logements.json"
import { useParams } from "react-router-dom"
import "../../styles/host.scss"

function Hote(){
    const {id} = useParams()
    const logement = logements.find((logement) => logement.id === id)

    return(
        <div className="host">
                <p className="host-name">{logement.host.name}</p>
                <img src={logement.host.picture} className="host-cover"/>
        </div>
    )
}

export default Hote