import logementList from "../../data/logements.json"
import Logement from "../logement/logement"
import "../../styles/galerie.scss"

function Galerie(){

    return (
        <div>
            <ul className='galerie'>
			{logementList.map(({id, title, cover})=> (
				<Logement key={id} id={id} title={title} cover={cover}/>))}
		    </ul>
        </div>
    )
}
export default Galerie