import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faTimes, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import '../Components/Contact.css'; // Adjust the path if needed

const Contact = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    // Function to generate random positions and delays
    const generateIcons = () => {
      const iconArray = [];
      for (let i = 0; i < 30; i++) {
        const x1 = Math.random();
        const y1 = Math.random();
        const x2 = Math.random();
        const y2 = Math.random();
        const x3 = Math.random();
        const y3 = Math.random();
        const x4 = Math.random();
        const y4 = Math.random();
        const delay = Math.random() * 20; // Random delay between 0 and 20 seconds
        iconArray.push(
          <div
            key={i}
            className="revolving-icon"
            style={{
              '--rand-x1': x1,
              '--rand-y1': y1,
              '--rand-x2': x2,
              '--rand-y2': y2,
              '--rand-x3': x3,
              '--rand-y3': y3,
              '--rand-x4': x4,
              '--rand-y4': y4,
              animationDelay: `-${delay}s`
            }}
          >
            <img src="../../Images/rota.png" alt="Revolving Icon" className="icon-lo" />
          </div>
        );
      }
      setIcons(iconArray);
    };

    generateIcons();
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-animated-background">
        <div className="contact-triangle"></div>
        <div className="contact-triangle"></div>
        <div className="contact-triangle"></div>
        <div className="contact-triangle"></div>
      </div>
      <div className="contact-content">
        <img src="../Images/logo-onton.png" alt="" className="contact-image" />
        <h1 className="contact-title">Immortalizing ONTON Culture</h1>
        <div className="contact-icon-container">
          <div className="contact-icon-box">
            <FontAwesomeIcon icon={faTelegram} className="contact-icon" />
          </div>
          <div className="contact-icon-box">
            <FontAwesomeIcon icon={faShieldAlt} className="contact-icon" />
          </div>
          <div className="contact-icon-box">
            <FontAwesomeIcon icon={faTimes} className="contact-icon" />
          </div>
          <div className="contact-icon-box">
            <FontAwesomeIcon icon={faFileAlt} className="contact-icon" />
          </div>
        </div>
        {/* New Effect */}
        <div className="contact-effect">
          {/* Add content or effect here */}
        </div>
      </div>
      <div className="contact-revolving-icons">
        {icons}
      </div>
      <footer className="contact-footer">
        <div className="contract-address"> CA: EQBZ_cafPyDr5KUTs0aNxh0ZTDhkpEZONmLJA2SNGlLm4Cko </div>
        <p>Copyright ® 2024 Resistance Dog. All Rights Reserved.</p>
        <p className="admin">admin@redoton.com</p>
      </footer>
    </div>
  );
};

export default Contact;
