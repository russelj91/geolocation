import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getLocation } from "./Geolocation";

export default function Single() {
  const [location, setLocation] = useState({});

  const handleClick = () => {
    getLocation(setLocation);
  };

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15848.739267953004!2d${
    location.longitude || 125.35758665
  }!3d${
    location.latitude || 6.74730005
  }!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1683211345947!5m2!1sen!2sph`;

  return (
    <>
      <Container>
        <h2 className="text-dark text-center ">GeoLocation</h2>
        <Row className="justify-content-center">
          <Col md className="text-center img-fluid">
            {location.address && (
              <p className="fw-bold">
                Address: {location.address}, <br />
                Latitude: {location.latitude}, Longitude: {location.longitude}
              </p>
            )}
            {location.error && <p>{location.error}</p>}
            <div className="text-center">
              <iframe
                className="rounded shadow"
                src={mapSrc}
                width="100%"
                height="1000"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>{" "}
            </div>
            <div>
              <Button
                className="btn-outline-light fw-bold"
                onClick={handleClick}
              >
                Get Location
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
