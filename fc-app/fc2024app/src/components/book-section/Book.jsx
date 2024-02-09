import "./Book.css"
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
const BookOnlineSection = () => {
    
    return ( 
    <>
        {/* <div className="book-container">
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
        </div> */}
    </>
     );
}
 
export default BookOnlineSection;