import { useState } from "react";
import arrowIcon from "../../assets/collapseArrow.svg"
import "../../styles/collapse.scss"

function Collapse({titre, contenu}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
    setIsOpen(!isOpen);
    };
    return(
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <button className="collapse-button" onClick={toggleOpen}>
                {titre}
                <img src={arrowIcon} alt="Flèche" className={`arrow ${isOpen ? "open" : ""}`} />
            </button>
            <div className={`collapse-content ${isOpen ? "open" : ""}`}>
                <ul className="collapse-list">
                    {!Array.isArray(contenu) ? contenu :
                    contenu.map((item, index) => (
                    <li key={index} className="collapse-item">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Collapse