import "../../styles/logement.scss"
import Slider from "../../components/slider/Slider"
import Description from "../../components/description/Description"

function Logement() {
    return (
      <div className="body">
        <Slider/>
        <Description/>
      </div>
    )
  }
  
  export default Logement