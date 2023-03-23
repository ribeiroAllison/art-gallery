import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import "./ArtDetail.css"
import Footer from "../Footer/Footer";
import viewButton from "../../../public/assets/shared/icon-view-image.svg"





export default function ArtDetail(props) {

    

    let {artName} = useParams()
    const artArray = props.art[0];
    const pageArtArray = artArray.filter(element=> element.name.split(' ').join('-').toLowerCase() === artName);
    const pageArt = pageArtArray[0];
    const pageArtName = pageArt.name.split(' ').join('-').toLowerCase();
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
                    <div id="enlarge-button">
                        <img id="view-button" src={viewButton} alt="enlarge picture button"/>
                        <h6>VIEW IMAGE</h6>
                    </div>
                    
                </div>
                
                
                <div id="text">
                    <h1>{pageArt.year}</h1>
                    <p>{pageArt.description}</p>
                    <Link to={pageArt.source} target="_blank">GO TO SOURCE</Link>
                </div>
            </main>

            
            <Footer pageArt={pageArt}/> 

        </section>
    )
}