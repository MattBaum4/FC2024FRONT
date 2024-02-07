import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import {scrollToSection} from "../../util/scrollUtil"

const NavigationBar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-list">
          <ul>
            {/* <li>
              {" "}
              <a href="section1"  onClick={() => scrollToSection("section1") }>About</a>
            </li> */}
            
            <li>
              {" "}
              <a href="section1" onClick={() => scrollToSection("section1") }>Services</a>
            </li>
            <li>
              {" "}
              <a href="section2" onClick={() => scrollToSection("section2") }>Book Online</a>
              
            </li>
            <li>
              {" "}
              <a href="section3"  onClick={() => scrollToSection("section3") }>Contact</a>
            </li>
            <li>
              {" "}
              <a href="section4"  onClick={() => scrollToSection("section4") }>Service Area</a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thefuturecruise/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="font-icons" icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@futurecruise"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="font-icons" icon={faTiktok} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
