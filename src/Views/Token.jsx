import React from 'react';
import '../Components/Token.css';
import { FaBalanceScale, FaBurn, FaPercentage, FaHandshake } from 'react-icons/fa';

const Token = () => {
  return (
    <div className="tokenomics-container">
      <h1 className="tokenomics-title">TOKENOMICS</h1>
      <div className="tokenomics-content">
        <div className="tokenomics-item">
          <FaBalanceScale className="tokenomics-icon" />
          <p className="tokenomics-label">Total Supply</p>
          <p className="tokenomics-value">100,000,000</p>
        </div>
        <div className="tokenomics-item">
          <FaBurn className="tokenomics-icon" />
          <p className="tokenomics-label">LP Burned</p>
          <p className="tokenomics-value">Community is capable of adding liquidity</p>
        </div>
        <div className="tokenomics-item">
          <FaPercentage className="tokenomics-icon" />
          <p className="tokenomics-label">Taxes</p>
          <p className="tokenomics-value">0/0</p>
        </div>
        <div className="tokenomics-item">
          <FaHandshake className="tokenomics-icon" />
          <p className="tokenomics-label">Contract</p>
          <p className="tokenomics-value">Renounced</p>
        </div>
      </div>
    </div>
  );
};

export default Token;
