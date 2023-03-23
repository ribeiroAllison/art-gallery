import "./Footer.css"

export default function Footer (props){

    return(
        <footer>
            <div id="footer-text">
                <h4>{props.pageArt.name}</h4>
                <p>{props.pageArt.artist.name}</p>
            </div>
            <div id="buttons">
                <img src="../../../public/assets/shared/icon-back-button.svg" id="back-button"/>
                <img src="../../../public/assets/shared/icon-next-button.svg"/>

            </div>
            
        </footer>
    )
}