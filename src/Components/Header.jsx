import logo from "../assets/img/galleria-logo.svg"
import "../../src/Global.css"
import "./Header/Header.css"

export default function Header () {

    return(
        <header id="header">
            <img alt="galleria logo" src={logo}></img>
            <h3>START SLIDESHOW</h3>
        </header>
    )
}