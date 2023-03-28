import { useNavigate } from "react-router-dom"
import "./Footer.css"

export default function Footer (props){

    const navigate = useNavigate()


    const goForward = () => {
        const nextArt = props.artArray.filter(element => element.order === (props.pageArt.order + 1));
        if(props.pageArt.order === 15){
            return;
        } 
        const nextArtPath = props.transformName(nextArt[0].name);
        navigate(`/${nextArtPath}`)
    }


    const goBack = () => {
        const lastArt = props.artArray.filter(element => element.order === (props.pageArt.order - 1));
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
                <img 
                    src="assets/shared/icon-back-button.svg" id="back-button" onClick={goBack}
                    alt="forward button"
                />
                <img 
                    src="assets/shared/icon-next-button.svg" onClick={goForward} id="forward-button"
                    alt="backward button"
                />

            </div>
            
        </footer>
    )
}