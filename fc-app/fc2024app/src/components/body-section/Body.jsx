import "./body.css";
import HeroImg from "../../assets/Future_Cruise.png";
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CardBody from "react-bootstrap/esm/CardBody";
import CardText from "react-bootstrap/esm/CardText";
import sedanOut from "../../assets/sedanExterior.jpg"
import sedanIn from "../../assets/blackInterior.jpg"
import midsizeIn from "../../assets/midsizeInterior.jpg"
import midsizeOut from "../../assets/midsizeExterior.jpg"
import truckIn from "../../assets/truckInterior.jpg"
import truckOut from "../../assets/truckExterior.jpg"
const BodySection = () => {
 
  return (
    <>
      <div className="hero-img">
        <img id="hero1" src={HeroImg}></img>
      </div>
      <div className="about-container">
        <div className="about-txt">
          <p>
            Experience <span id="preem">premium</span> automotive detailing
            delivered right to your driveway!
          </p>
          <p>Proudly serving Franklin Tennessee since 2019</p>
        </div>
      </div>
      <div className="dtl-container">
        <div className="complete-dtl-txt">
          <p>THE COMPLETE DETAIL</p>
        </div>
        </div>
        
        <div className="services-container">
        <div className="int-container">
          <div className="int-txt">
            <p className="int-ext-txt">Interior</p>
            <p>FULL VACUUM</p>
            <p>DASH AND CONSOLE</p>
            <p>ALL GLASS</p>
            <p>STEAM CLEAN</p>
            <p>CARPET SPOT TREATMENT</p>
            <p>ODOR ELIMINATION</p>
            <p>HEADLINER & SUNVISOR</p>
            <p>UV PROTECTION</p>
          </div>
        </div>

        <div className="ext-container">
            <div className="ext-txt">
                <p className="int-ext-txt">Exterior</p>
                <p>FOAM CANNON</p>
                <p>BUG & TAR REMOVAL</p>
                <p>IRON REMOVAL</p>
                <p>WHEELS</p>
                <p>TIRES</p>
                <p>DOOR JAMBS</p>
                <p>CLAY BAR</p>
                <p>WAX PROTECTANT</p>
            </div>
        </div>

        </div>
        
        <div className="book-container">
            <div className="book-txt-section">
                <p>Our services</p>
            </div>
         <div className="card-container">
            <Card className="card-row">    
                <CardBody>
                    <CardText className="card-titles">Sedan Complete Detail</CardText>
                <Card.Img className="card-imgs" alt="" variant="top" src={sedanOut}/>
                </CardBody>
                <CardText className="card-pricing">this is the price</CardText>
                <CardText className="card-time">time</CardText>
                <Button className="card-btns" variant="primary">View Calendar</Button>
            </Card>
            <Card className="card-row">
                <CardBody>
                    <CardText className="card-titles">Sedan Interior Only</CardText>
                <Card.Img className="card-imgs" alt="" variant="top" src={sedanIn}/>
                </CardBody>
                <CardText className="card-pricing">this is the price</CardText>
                <CardText className="card-time">time</CardText>
                <Button className="card-btns" variant="primary">View Calendar</Button>
            </Card>
         </div>

         <div className="card-container">
         <Card className="card-row">
                <CardBody>
                    <CardText className="card-titles">Mid-size SUV Complete detail</CardText>
                <Card.Img className="card-imgs" alt="" variant="top" src={midsizeOut}/>
                </CardBody>
                <CardText className="card-pricing">this is the price</CardText>
                <CardText className="card-time">time</CardText>
                <Button className="card-btns" variant="primary">View Calendar</Button>
            </Card>
         <Card className="card-row">
                <CardBody>
                    <CardText className="card-titles">Mid-size SUV Interior Only</CardText>
                <Card.Img className="card-imgs" alt="" variant="top" src={midsizeIn}/>
                </CardBody>
                <CardText className="card-pricing">this is the price</CardText>
                <CardText className="card-time">time</CardText>
                <Button className="card-btns" variant="primary">View Calendar</Button>
            </Card>
         </div>
         <div className="card-container">
         <Card className="card-row">
                <CardBody>
                    <CardText className="card-titles">SUV/Truck Complete Detail</CardText>
                <Card.Img className="card-imgs" alt="" variant="top" src={truckOut}/>
                </CardBody>
                <CardText className="card-pricing">this is the price</CardText>
                <CardText className="card-time">time</CardText>
                <Button className="card-btns" variant="primary">View Calendar</Button>
            </Card>
         <Card className="card-row">
                <CardBody>
                    <CardText className="card-titles">SUV/Truck Interior Only</CardText>
                <Card.Img className="card-imgs" alt="" variant="top" src={truckIn}/>
                </CardBody>
                <CardText className="card-pricing">this is the price</CardText>
                <CardText className="card-time">time</CardText>
                <Button className="card-btns" variant="primary">View Calendar</Button>
            </Card>
         </div>
        </div>
    </>
  );
};

export default BodySection;
