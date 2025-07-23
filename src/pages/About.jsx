import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">
        Acerca de Nosotros
      </h1>
      
      <div className="about-content">
        <p className="about-description">
          Somos una tienda online dedicada a ofrecerte los mejores productos con la mejor calidad.
        </p>
        
        <p className="about-contact">
          📧 Email: info@tiendak.com
        </p>
        
        <p className="about-location">
          📍 Ubicación: Online
        </p>
      </div>
    </div>
  );
};

export default About;
