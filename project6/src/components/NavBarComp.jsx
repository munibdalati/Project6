import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
// import Home from "./Home";
// import PrayersList from "./PrayersList";
import "../CSS/Nav.css";
import { Link } from "react-router-dom";

function NavBarComp() {
  let profileIcon = (
    <i className="fa-solid fa-user" style={{ color: "#F1F6F9" }}></i>
  );
  return (
      <div>
        <>
          {/* begining of Navbar */}
          <Navbar expand="lg" className="navbar">
            <Container fluid className="nav-flex">
              <div>
                <Navbar.Brand as={Link} to={"/"} className="navbar-text navbar-title">
                  <i class="fa-solid fa-mosque mosque-icon"></i>
                  Muslims Prayers Guide
                </Navbar.Brand>
              </div>
              <div>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/"} className="navbar-text">
                      Home
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to={"/PrayersList"}
                      className="navbar-text"
                    >
                      Prayer Times
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/"} className="navbar-text">
                      Qibla
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/"} className="navbar-text">
                      Quran
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
              <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav navbar-text" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <NavDropdown
                    // adding proporities to downdrop to align it left
                      align="end"
                      renderMenuOnMount={true}
                      flip={false}
                      rootCloseEvent="click"
                      popperConfig={{
                        positionFixed: true,
                      }}
                      title={profileIcon}
                      id="basic-nav-dropdown"
                      className=" profile-dropdown navbar-text"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Sign out
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Container>
          </Navbar>
          {/* ending of Navbar */}
        </>
      </div>
  );
}

export default NavBarComp;
