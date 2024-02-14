import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css"   
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";


const FooterSection = () => {
    return ( 
        <>
        <div className="footer-container">
            <p>THEFUTURECRUISE@GMAIL.COM</p>
            <p>CHECK OUT OUR SOCIALS!</p>
            <FontAwesomeIcon className="fa-icons" icon={faInstagram}/>
            <FontAwesomeIcon className="fa-icons" icon={faTiktok}/>
        </div>
        </>
     );
}
 
export default FooterSection;