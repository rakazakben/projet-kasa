import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.svg'
import "../../styles/header.css"
function Header() {
    return (
      <div className='header'>
        <img src={logo}/>
        <nav>
        <Link to="/" className='link'>Accueil</Link>
        <Link to="/about" className='link'>à propos</Link>
        </nav>
       
      </div>
    )
  }
  
  export default Header