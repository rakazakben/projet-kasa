import Banner from "../../components/banniere/Banner"
import bannerImage from "../../assets/banniereHome.jpg"
import "../../styles/home.scss"

function Home() {

  return (
    <div className="body">
      <Banner texte="Chez vous, partout et ailleurs" img={bannerImage} isDark = {true} />

    </div>)
}

export default Home
