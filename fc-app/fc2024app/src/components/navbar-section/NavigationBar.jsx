import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram , faTiktok}  from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"
import FutureCruisePNG from "../../assets/FutureCruisePNG.png"
const NavigationBar = () =>{
    

    
    return (
        <>
        <div className="nav-container-main">
               <div className="logo-png-container">
                <img alt= "" 
                id="logo-actual"
                src={FutureCruisePNG}>
                    
                </img>
                </div> 
            <div className="link-logo-holder">
                {/* need to build out other pages to ref to */}
                <div className="llh-actual">
                    <a className="a-tag-links" href=" ">Book Online</a>
                    <a className="a-tag-links" href=" ">Contact Us</a>
                    <a className="a-tag-links" href=" ">About</a>
                    <a 
                    href="https://www.instagram.com/thefuturecruise/?hl=en" 
                    target="_blank"
                    rel="noreferrer"
                    ><FontAwesomeIcon className="a-tag-links" icon={faInstagram} /></a>
                    <a href="https://www.tiktok.com/@futurecruise"
                    target="_blank"
                    rel="noreferrer"
                    ><FontAwesomeIcon className="a-tag-links" icon={faTiktok} /></a>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default NavigationBar;