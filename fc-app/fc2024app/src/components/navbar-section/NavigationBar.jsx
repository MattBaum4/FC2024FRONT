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
            <li>
              {" "}
              <a href="section1" onClick={() => scrollToSection("section1") }>Book Online</a>
              
            </li>
            <li>
              {" "}
              <a href="section2"  onClick={() => scrollToSection("section2") }>About</a>
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
                href="tiktok.com/search/user?q=future cruise&t=1706749095039"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thefuturecruise/?hl=en"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
