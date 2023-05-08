import React from "react";

const MapFrame = ({ location }) => {
  const { latitude = 11.659877933153306, longitude = 117.31605888409977 } =
    location || {};

  const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8002532.808296205!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324053215f87de63%3A0x784790ef7a29da57!2sPhilippines!5e0!3m2!1sen!2sph!4v1683522331417!5m2!1sen!2sph`;

  return (
    <iframe
      src={src}
      width="600"
      height="450"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapFrame;
