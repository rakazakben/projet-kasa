import logements from "../../data/logements.json"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../styles/notes.scss"

function Notes({rating}){
   /* const {id} = useParams()
    console.log(id)
    const logement = logements.find((logement) => logement.id === id)*/
    const noteMax = 5;
    return (
        <div className="note">
          {Array.from({ length: noteMax }, (_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={index < rating ? "star filled" : "star empty"}
            />
          ))}
        </div>
      );

}

export default Notes