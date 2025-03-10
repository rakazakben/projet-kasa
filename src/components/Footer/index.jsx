import { Link } from 'react-router-dom'
import logo from '../../assets/logofooter.svg'
import "../../styles/footer.css"
function Footer() {
    return (
      <div className='footer'>
        <img src={logo}/>
        <p>© 2020 Kasa. All rights reserved</p>
       
      </div>
    )
  }
  
  export default Footer