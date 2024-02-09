import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import {scrollToSection} from "../../util/scrollUtil"
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-list">
          <ul>

            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/calendar">View Calendar</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>
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
