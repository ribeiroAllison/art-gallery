import { Outlet, useNavigate } from "react-router-dom"
import logo from "../../../public/assets/img/galleria-logo.svg"
import "../../../src/Global.css"
import "./Header.css"



export default function Header () {
    
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/")
    }

    return(
        <div>
            <header id="header">
                <img alt="galleria logo" src={logo} onClick={goHome}></img>
                <h3>START SLIDESHOW</h3>
            </header>
            <Outlet />
            
        </div>
        
    )
}