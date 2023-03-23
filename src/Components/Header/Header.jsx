import logo from "../../../public/assets/img/galleria-logo.svg"
import "../../../src/Global.css"
import "./Header.css"
import { Outlet } from "react-router-dom"


export default function Header () {

    return(
        <div>
            <header id="header">
                <img alt="galleria logo" src={logo}></img>
                <h3>START SLIDESHOW</h3>
            </header>
            <Outlet />
            
        </div>
        
    )
}