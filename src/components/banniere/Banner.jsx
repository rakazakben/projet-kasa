import "../../styles/banner.scss"

function Banner({texte, img, isDark}){
    return (
        <div className="banner">
            <img src={img} alt="bannière" className={`banner-image${isDark ? " dark" : "" }`}/>
            <h1 className="banner-text">{texte}</h1>
        </div>
    )
}

export default Banner