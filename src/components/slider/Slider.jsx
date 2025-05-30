import { useParams } from "react-router-dom"
import { useState } from "react"
import logements from "../../data/logements.json"
import "../../styles/slider.scss"
import backArrow from "../../assets/arrow_back.svg"
import nextArrow from "../../assets/arrow_next.svg"

function Slider() {
  const {id} = useParams()
  const logement = logements.find((logement) => logement.id === id)
  const [currentIndex, setCurrentIndex] = useState(0); // Stocke l'index de l'image actuelle

  // Fonction pour aller à l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour aller à l'image précédente
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };
    return (
        <div className="slide-container">
          <img src={logement.pictures[currentIndex]} alt="" className="image-logement"/>
          {logement.pictures.length > 1 ? <img src={backArrow} className="arrow back" onClick={prevImage}/> : ""}
          {logement.pictures.length > 1 ? <img src={nextArrow} className="arrow next" onClick={nextImage}/> : ""}
          {logement.pictures.length > 1 ? <p className="index">{currentIndex + 1}/{logement.pictures.length}</p> : ""}
          
          
        </div>
    )
  }
  
  export default Slider