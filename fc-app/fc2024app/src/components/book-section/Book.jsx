import "./Book.css"
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CardBody from "react-bootstrap/esm/CardBody";
import CardText from "react-bootstrap/esm/CardText";
import sedanOut from "../../assets/sedanExterior.jpg"
import sedanIn from "../../assets/blackInterior.jpg"
const BookOnlineSection = () => {
    
    return ( 
    <>
        <div className="book-container">
            <div className="book-txt-section">
                <h1>Book Online</h1>
            </div>
         <div className="card-container">
            <Card className="card-actual">
                <CardBody>
                    <CardText>Sedan Full Package</CardText>
                <Card.Img className="card-imgs" alt="" variant="top" src={sedanOut}/>
                <Button className="card-btns" variant="primary">Book</Button>
                </CardBody>
            </Card>
            <Card className="card-actual">
                <CardBody>
                    <CardText>Sedan Full Package</CardText>
                <Card.Img className="card-imgs" alt="" variant="top" src={sedanIn}/>
                <Button className="card-btns" variant="primary">Book</Button>
                </CardBody>
            </Card>
         </div>
        </div>
    </>
     );
}
 
export default BookOnlineSection;