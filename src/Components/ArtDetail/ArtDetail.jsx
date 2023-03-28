import { useParams, Link } from "react-router-dom"
import { useState } from "react";
import "./ArtDetail.css"
import Footer from "../Footer/Footer";
import viewButton from "../../../public/assets/shared/icon-view-image.svg"


export default function ArtDetail(props) {

    const [popUp, setPopUp] = useState(false);

    const togglePopUp = () => {
        setPopUp(!popUp)
    };

    if(popUp) {
        document.body.classList.add('active-popUp')
    } else {
        document.body.classList.remove('active-popUp')
    }

    const transformName = props.transformName;

    let {artName} = useParams()
    const artArray = props.art[0];
    const pageArtArray = artArray.filter(element=> transformName(element.name) === artName);
    const pageArt = pageArtArray[0];
    const pageArtName = transformName(pageArt.name);
    const picturePath = `assets/${pageArtName}/gallery.jpg`
    const artistPath = `assets/${pageArtName}/artist.jpg`
    

    
    return(
        <section id="details-ctr">

            <main id="art-info">
                <div id="portrait">
                    <div id="art-img">
                        <img src={picturePath}/>
                    </div>

                    <div id="art-name">
                        <h1>{pageArt.name}</h1>
                        <p>{pageArt.artist.name}</p>
                    </div>
                    <img id="artist" src={artistPath} alt="artist picture"/>
                    <div className="pop-up-button" onClick={togglePopUp}>
                        <img id="view-button" src={viewButton} alt="enlarge picture button" />
                        <h6>VIEW IMAGE</h6>
                    </div>
                    
                </div>
                
                
                <div id="text">
                    <h1>{pageArt.year}</h1>
                    <p>{pageArt.description}</p>
                    <Link to={pageArt.source} target="_blank">GO TO SOURCE</Link>
                </div>
            </main>

            <Footer artArray={artArray} pageArt={pageArt} transformName={transformName}/>
            {popUp && (

                <div id="pop-up">
                    <div id="pop-ctr">
                        <h6 onClick={togglePopUp}> CLOSE </h6>
                        <img src={picturePath}></img>
                    </div>
                    
                    
                </div>
            )}
            

        </section>
    )
}