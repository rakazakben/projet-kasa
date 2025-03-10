import { Link } from 'react-router-dom'

function Header() {
    return (
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/about">à propos</Link>
        <Link to="/logement">Logements</Link>
      </div>
    )
  }
  
  export default Header