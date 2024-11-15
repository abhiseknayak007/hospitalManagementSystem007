import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At BedWiser, we are dedicated to revolutionizing hospital management systems. Our mission is to simplify appointment scheduling and enhance bed allocation processes. With a focus on user experience, we aim to create an intuitive platform that caters to both healthcare providers and patients. Our team consists of passionate professionals committed to leveraging technology to improve patient care. Together, we envision a future where healthcare is more accessible and efficient!
          </p>
          <p>
          Our goal is to empower healthcare facilities with seamless solutions. By integrating advanced features like real-time bed tracking and automated appointment reminders, we aim to enhance operational efficiency. We believe that every patient deserves timely care and easy access to medical services. Our commitment drives us to continuously improve our offerings and exceed expectations.
          </p>
          <p>Transforming healthcare is our passion!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
