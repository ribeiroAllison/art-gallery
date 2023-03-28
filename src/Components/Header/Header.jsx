import { Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import logo from "../../../public/assets/img/galleria-logo.svg"
import "../../../src/Global.css"
import "./Header.css"



export default function Header (props) {
    
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/")
    }

    const [position, setPosition] = useState(1)
    const [slideShowStatus, setSlideShowStatus] = useState(false);
    const [url, setUrl] = useState('/starry-night')

    const toggleSlideShow = () => {
        setSlideShowStatus(!slideShowStatus);
    }

    const artArray = props.art[0];
    useEffect(() => {
        
        if (slideShowStatus) {
            navigate(url)
            const timeoutId = setTimeout(() => {
            const pageArtArray = artArray.filter((element) => element.order === position);
            const pageArt = pageArtArray[0];
            if (pageArt) {
                const path = `/${props.transformName(pageArt.name)}`;
                setUrl(path);
                setPosition((prevPosition) => prevPosition === 15 ? 1 : prevPosition + 1);
            } else {
                setSlideShowStatus(false);
            }
            },  7000);
            return () => clearTimeout(timeoutId);
        }
    }, [slideShowStatus, position]);

    const handleClick = () =>{
        toggleSlideShow();
        const slideButton = document.getElementById("slideShow");
        !slideShowStatus ? slideButton.innerHTML = "STOP SLIDESHOW" : slideButton.innerHTML = "START SLIDESHOW";
        
    };

    return(
        <div>
            <header id="header">
                <img alt="galleria logo" src={logo} onClick={goHome}></img>
                <h3 onClick={handleClick} id="slideShow">START SLIDESHOW</h3>
            </header>
            <Outlet />
            
        </div>
        
    )
}