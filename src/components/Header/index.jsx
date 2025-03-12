import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.svg'
import "../../styles/header.scss"
function Header() {
    return (
      <div className='header body'>
        <img src={logo} className='logo'/>
        <nav>
        <Link to="/" className='link'>Accueil</Link>
        <Link to="/about" className='link'>A propos</Link>
        </nav>
       
      </div>
    )
  }
  
  export default Header