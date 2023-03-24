import { useNavigate } from "react-router-dom"
import "./Footer.css"

export default function Footer (props){

    const navigate = useNavigate()

    // const toggleButton = () => {
    //     const nextArt = props.artArray.filter(element => element.order === (props.pageArt.order + 1));
    //     const forwardButton = document.getElementById("forward-button");
    //     const backButton = document.getElementById("back-button");

    //     props.pageArt.order === 14 ? 
    //     forwardButton.style.backgroundColor = "blue":
    //     forwardButton.style.backgroundColor = "white"

    //     props.pageArt.order === 2 ?
    //     backButton.style.backgroundColor = "blue":
    //     backButton.style.backgroundColor = "white"

    //     console.log("current: " + nextArt[0].order);
    //     console.log("prev: " + props.pageArt.order)
        
        
    // }


    const goForward = () => {
        const nextArt = props.artArray.filter(element => element.order === (props.pageArt.order + 1));
        // toggleButton();
        if(props.pageArt.order === 15){
            return;
        } 
        const nextArtPath = props.transformName(nextArt[0].name);
        navigate(`/${nextArtPath}`)
    }


    const goBack = () => {
        const lastArt = props.artArray.filter(element => element.order === (props.pageArt.order - 1));
        // toggleButton();
        if(props.pageArt.order === 1){
            return;
        } 
        const lastArtPath = props.transformName(lastArt[0].name);
        navigate(`/${lastArtPath}`)
    }
    
    return(
        <footer>
            <div id="footer-text">
                <h4>{props.pageArt.name}</h4>
                <p>{props.pageArt.artist.name}</p>
            </div>
            <div id="buttons">
                <img src="assets/shared/icon-back-button.svg" id="back-button" onClick={goBack}/>
                <img src="assets/shared/icon-next-button.svg" onClick={goForward} id="forward-button"/>

            </div>
            
        </footer>
    )
}