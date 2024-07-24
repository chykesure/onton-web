import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faTimes, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import '../Components/Navbar.css'; // Adjust the path if needed

const Navbar = () => {
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
    <div className="container">
      <div className="animated-background">
        <div className="triangle"></div>
        <div className="triangle"></div>
        <div className="triangle"></div>
        <div className="triangle"></div>
      </div>
      <div className="content">
        <img src="../Images/logo-onton.png" alt="" className="image" />
        <h1 className="title">Immortalizing ONTON Culture</h1>
        <div className="icon-container">
          <div className="icon-box">
            <FontAwesomeIcon icon={faTelegram} className="icon" />
          </div>
          <div className="icon-box">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
          </div>
          <div className="icon-box">
            <FontAwesomeIcon icon={faTimes} className="icon" />
          </div>
          <div className="icon-box">
            <FontAwesomeIcon icon={faFileAlt} className="icon" />
          </div>
        </div>
      </div>
      <div className="revolving-icons">
        {icons}
      </div>
    </div>
  );
};

export default Navbar;
