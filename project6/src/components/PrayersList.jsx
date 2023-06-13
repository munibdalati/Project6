import React, { useState, useEffect } from "react";
import countryData from "./PrayersTime";
import "../CSS/PrayerTimes.css";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import axios from "axios";
import fajr from "../assets/images/fajr.jpg";
import sunrise from "../assets/images/sunrise.jpeg";
import duhur from "../assets/images/duhur.jpg";
import asr from "../assets/images/asr.jpg";
import sunset from "../assets/images/sunset.jpg";
import isha from "../assets/images/isha.jpg";
import NavBarComp from "./NavBarComp";
import Footer from "./Footer";


const PrayersList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (selectedCity && selectedCountry) {
      const params = {
        country: selectedCountry,
        city: selectedCity,
      };
      axios
        .get("http://api.aladhan.com/v1/timingsByCity", { params: params })
        .then(function (response) {
          const timings = response.data.data.timings;
          document.getElementById("Fajr-time").innerHTML = timings.Fajr;
          document.getElementById("Shurouq-time").innerHTML = timings.Sunrise;
          document.getElementById("Duhr-time").innerHTML = timings.Dhuhr;
          document.getElementById("Asr-time").innerHTML = timings.Asr;
          document.getElementById("Maghrib-time").innerHTML = timings.Maghrib;
          document.getElementById("Ishaa-time").innerHTML = timings.Isha;

          //Miladi date
          const miladiDate = response.data.data.date.readable;
          document.getElementById("miladiDate").innerHTML = miladiDate;

          //Hijri date
          const hijriDateDay = response.data.data.date.hijri.day;
          const hijriDateMonth = response.data.data.date.hijri.month.en;
          const hijriDateYear = response.data.data.date.hijri.year;

          document.getElementById("hijriDate").innerHTML =
            hijriDateDay + " " +  hijriDateMonth +" " + hijriDateYear;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [selectedCity, selectedCountry]);

  const search = () => {
    const selectedCity = countryData.find((item) =>
      item.capital.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedCity) {
      setSelectedCity(selectedCity.capital);
      setSelectedCountry(selectedCity.code);
      setCityOptions([]); // Clear the city options list
    }
    else{
      setShowAlert(true);
  };
}

  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchQuery(input);

    const filteredCities = countryData.filter((item) =>
      item.capital.toLowerCase().startsWith(input.toLowerCase())
    );
    setCityOptions(filteredCities);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="body">
      <NavBarComp />
      <div className="search-body">
      {/* search form */}
        <Form className="search-bar-Btn">
          <Form.Control
            className="search-bar"
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Type your city name"
          />
          <Button className="searchBtn" onClick={search}>
            Search
          </Button>
        </Form>

        {/* Model */}
        <Modal show={showAlert} onHide={handleCloseAlert} centered>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            City not found! Please enter a valid Capital name.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseAlert}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
        {/* option list */}
        {cityOptions.length > 0 && (
          <ul className="city-options">
            {cityOptions.map((city) => (
              <li
                key={city.code}
                onClick={() => {
                  setSearchQuery(city.capital);
                  setSelectedCity(city.capital);
                  setSelectedCountry(city.code);
                  setCityOptions([]); // Clear the city options list
                }}
              >
                {city.capital}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="results">
        <div className="data text">
          {selectedCity ? <h1>{selectedCity}</h1> : <h1>City</h1>}
          <p id="miladiDate"></p>
          <p id="hijriDate"></p>
        </div>

        <Container className="times-imgs text">
          <Row>
            <Col className="text-center">
              <div className="arabic-time">
                <p>Fajr</p>
                <p>الفجر</p>
              </div>
              <img className="times-img" src={fajr} alt="" img />
              <p id="Fajr-time" className="times"></p>
            </Col>
            <Col className="text-center">
              <div className="arabic-time">
                <p>Shurouq</p>
                <p>الشروق</p>
              </div>
              <img className="times-img" src={sunrise} alt="" img />
              <p id="Shurouq-time" className="times"></p>
            </Col>
            <Col className="text-center">
              <div className="arabic-time">
                <p>Duhur</p>
                <p>الظهر</p>
              </div>
              <img className="times-img" src={duhur} alt="" img />
              <p id="Duhr-time" className="times"></p>
            </Col>

          <Col className="text-center">
              <div className="arabic-time">
                <p>Asr</p>
                <p>العصر</p>
              </div>
              <img className="times-img" src={asr} alt="" img />
              <p id="Asr-time" className="times"></p>
            </Col>
            <Col className="text-center">
              <div className="arabic-time">
                <p>Maghrib</p>
                <p>المغرب</p>
              </div>

              <img className="times-img" src={sunset} alt="" img />
              <p id="Maghrib-time" className="times"></p>
            </Col>
            <Col className="text-center">
              <div className="arabic-time">
                <p>Isha'a</p>
                <p>العشاء</p>
              </div>

              <img className="times-img" src={isha} alt="" img />
              <p id="Ishaa-time" className="times"></p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default PrayersList;
