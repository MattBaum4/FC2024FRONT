import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
const NavigationBar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-list">
          <ul>
            <li>
              {" "}
              <a href=" ">Book Online</a>
            </li>
            <li>
              {" "}
              <a href=" ">About</a>
            </li>
            <li>
              {" "}
              <a href=" ">Contact</a>
            </li>
            <li>
              {" "}
              <a href=" ">Service Area</a>
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
