import logements from "../../data/logements.json"
import { useParams } from "react-router-dom"
import "../../styles/tags.scss"

function Tags(){
    const {id} = useParams()
    const logement = logements.find((logement) => logement.id === id)

    return(
        <ul className="tag-list">
            {logement.tags.map((tag, index) => (
          <li key={index} className="tag">{tag}</li>
        ))}
        </ul>
    )
}

export default Tags