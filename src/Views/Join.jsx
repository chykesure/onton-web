import React from 'react';
import '../Components/Join.css';
import { FaRocket, FaHammer, FaSeedling, FaLaughBeam, FaDollarSign } from 'react-icons/fa';

const Join = () => {
  return (
    <div className="join-container">
      <div className="join-header">
        <h1>Join The ONTON</h1>
        <FaRocket className="rocket-icon" />
      </div>
      <div className="join-content">
        <p>Let's:</p>
        <div className="cards">
          <div className="card">
            <FaHammer className="card-icon" />
            <h2>Build ONTON</h2>
            <p>Help us create something amazing.</p>
          </div>
          <div className="card">
            <FaSeedling className="card-icon" />
            <h2>Grow ONTON</h2>
            <p>Be a part of our growth journey.</p>
          </div>
          <div className="card">
            <FaLaughBeam className="card-icon" />
            <h2>Meme ONTON</h2>
            <p>Have fun and create memes.</p>
          </div>
          <div className="card">
            <FaDollarSign className="card-icon" />
            <h2>Earn ONTON</h2>
            <p>Join us and earn rewards.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
