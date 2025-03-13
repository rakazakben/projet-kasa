import Banner from "../../components/banniere/Banner"
import "../../styles/banner.scss"
import bannerImage from "../../assets/banniereAbout.jpg"
import Collapse from "../../components/description/Collapse"
import about from "../../data/aboutText.json"
import "../../styles/about.scss"

function About() {
    return (
      <div className="body">
        <Banner texte="" img={bannerImage} isDark = {true}/>
        <div className="section-about">
            <Collapse titre="Fiabilité" contenu={about.fiabilite}/>
            <Collapse titre="Respect" contenu={about.respect}/>
            <Collapse titre="Service" contenu={about.service}/>
            <Collapse titre="Sécurité" contenu={about.securite}/>
        </div>
      </div>
    )
  }
  
  export default About