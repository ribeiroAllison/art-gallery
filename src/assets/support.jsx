import { useParams } from "react-router-dom";

export function getArtName (props) {
    let {artName} = useParams()
    const artArray = props.art[0];
    const pageArt = artArray.filter(element=> element.name.split(' ').join('-').toLowerCase() === artName);
    return `../../assets/${pageArt[0].name.split(' ').join('-').toLowerCase()}/gallery.jpg` 
}

