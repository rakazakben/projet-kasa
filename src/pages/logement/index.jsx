import "../../styles/logement.scss"
import { useParams } from "react-router-dom"
import logements from "../../data/logements.json"
import Slider from "../../components/slider/Slider"
import Description from "../../components/description/Description"
import Error from "../../components/Error"

function Logement() {
  const {id} = useParams()
  console.log(id)
  const logement = logements.find((logement) => logement.id === id)
  if (!logement) {
    return <Error/>
  }
    return (
      <div className="body">
        <Slider/>
        <Description/>
      </div>
    )
  }
  
  export default Logement