import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram , faTiktok}  from "@fortawesome/free-brands-svg-icons"

const NavigationBar = () =>{
    return (
        <>
        <div className="nav-container-main">
            <div className="link-logo-holder">
                {/* need to build out other pages to ref to */}
                <div className="llh-actual">
                    <a className="a-tag-links" href=" ">Book Now</a>
                    <a className="a-tag-links" href=" ">Contact Us</a>
                    <a className="a-tag-links" href=" ">About</a>
                    <FontAwesomeIcon className="a-tag-links" href="" icon={faInstagram} />
                    <FontAwesomeIcon className="a-tag-links" href="" icon={faTiktok} />
                    
                </div>
            </div>

        </div>
        
        </>
    )
}
export default NavigationBar;