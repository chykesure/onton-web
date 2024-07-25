import React from 'react';
import '../Components/Roadmap.css';
import { FaDollarSign } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import { FiTrendingUp } from 'react-icons/fi';

const Roadmap = () => {
  return (
    <div className="roadmap-container">
      <div className="glitter-effect"></div> {/* Glitter effect for container */}
      <h1 className="roadmap-title">Roadmap</h1>
      <div className="roadmap-phase">
        <div className="roadmap-icon">
          <FaDollarSign size={40} />
        </div>
        <div className="roadmap-details">
          <h3>Phase 1:</h3>
          <p>$ONTON</p>
        </div>
      </div>
      <div className="roadmap-phase">
        <div className="roadmap-icon">
          <FiTrendingUp size={40} />
        </div>
        <div className="roadmap-details">
          <h3>Phase 2:</h3>
          <p>Vibe and HODL</p>
          <p>ONTON becomes $LOGAN of Ton Community</p>
        </div>
      </div>
      <div className="roadmap-phase">
        <div className="roadmap-icon">
          <GiTakeMyMoney size={40} />
        </div>
        <div className="roadmap-details">
          <h3>Phase 3:</h3>
          <p>$ONTON Takeover</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
