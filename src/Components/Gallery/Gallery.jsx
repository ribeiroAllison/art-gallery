import "./Gallery.css"
import { Link } from "react-router-dom";



export default function Gallery(props) {

    const findArt = (name) => {
        const array = props.art[0].filter(element => element.name === name);
        return array[0];
    }
    
    const artArray = [
    "Starry Night", 
    "The Storm on the Sea of Galilee", 
    "Lady with an Ermine", 
    "The Boy in the Red Vest", 
    "Girl with a Pearl Earring", 
    "The Great Wave off Kanagawa", 
    "The Night Café", "Arnolfini Portrait", 
    "Guernica" , 
    "Van Gogh Self-portrait",
    "Mona Lisa",
    "Penitent Magdalene",
    "The Sleeping Gypsy",
    "The Basket of Apples",
    "The Swing"
]

    const generateId = (nameString) => {
        return nameString.split(' ').join('-')
    }

        
    return(
        <main id="gallery">
            
            {artArray.map((artName) => {
                let artObj = findArt(artName);
                return(
                    <Link to={`/${generateId(artObj.name).toLowerCase()}`} className="art-ctr" id={generateId(artObj.name)} >
                        <h4>{artObj.name}</h4>
                        <h5>{artObj.artist.name}</h5>
                    </Link>
                )
                    
            })}
            
        </main>
    )
}