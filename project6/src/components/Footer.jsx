import React from "react";
import "../CSS/Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  // updating year in the footer
let currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <p className="text-center">
          &copy; {currentYear} <i className="fa-solid fa-mosque mosque-icon-footer"></i>
          Muslims Prayers Guide
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
