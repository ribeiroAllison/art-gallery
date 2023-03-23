import { useParams } from "react-router-dom"

export default function ArtDetail(props) {

    let {artName} = useParams()
    const artArray = props.art[0];
    // const pageArt = artArray.filter((element) =>{
    //                 element.name.split(' ').join('-').toLowerCase() === artName
    // });

    const pageArt = artArray[0].name.split(' ').join('-').toLowerCase();

    console.log(pageArt)

    return(
        <div>
            <h1>Art</h1>
        </div>
    )
}