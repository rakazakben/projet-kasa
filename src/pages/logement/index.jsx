import { useParams } from "react-router-dom"
import logements from "../../data/logements.json"
import "../../styles/logement.scss"

function Logement() {
  const {id} = useParams()
  console.log(id)
  const logement = logements.find((logement) => logement.id === id)
  if (!logement) {
    return <h2>Logement non trouvé</h2>;
  }
    return (
      <div className="body">
        <img src={logement.cover} alt="" className="image-logement"/>

      </div>
    )
  }
  
  export default Logement