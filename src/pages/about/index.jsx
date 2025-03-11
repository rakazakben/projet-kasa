import Banner from "../../components/banniere/Banner"
import "../../styles/banner.scss"
import bannerImage from "../../assets/banniereAbout.jpg"
function About() {
    return (
      <div className="body">
        <Banner texte="" img={bannerImage} isDark = {true}/>
      </div>
    )
  }
  
  export default About