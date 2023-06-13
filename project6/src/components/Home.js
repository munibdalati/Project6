import React from "react";
import "../CSS/Home.css";
import { Card, Button } from "react-bootstrap";
import Kaaba from "../assets/images/Kaaba.png";
import NavBarComp from "./NavBarComp";
import Footer from "./Footer";
import { Link } from "react-router-dom";


const Home = () => {

  return (
    
    <div>
    <NavBarComp />
        <div className=" home_body " >
      <Card className="card" >
        <Card.Img variant="top" className="Kaaba" src={Kaaba} />
        <Card.Body>
          <Card.Title>Muslims Prayers Guide</Card.Title>
          <Card.Text className="appText">
          The application, utilized by millions of Muslims worldwide, provides accurate prayer times for cities across the globe.
          </Card.Text>
          <Button as={Link} to={"/PrayersList"} className="getStartBtn">Get started!</Button>
        </Card.Body>
      </Card>
    </div>
    <Footer />
    </div>

  );
};
export default Home;
