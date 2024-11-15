import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          BedWiser is a cutting-edge hospital management platform designed to streamline appointment booking and bed allocation. With a focus on efficiency and patient care, BedWiser ensures that hospital operations run smoothly, minimizing delays and improving service quality. The system’s user-friendly interface empowers healthcare staff to manage resources effectively, enhancing the overall patient experience.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
