import React from 'react';
import '../Components/Homepage.css';

const Homepage = () => {
    return (
        <div className="homepage">
            <h1 className="title-h">HOW TO BUY</h1>
            <div className="steps-container">
                <div className="step">
                    <div className="step-content">
                        <div className="step-icon">
                            <img src='../../Images/mn-logo.png' alt="Icon 1" />
                        </div>
                        <div className="tracing-light"></div>
                    </div>
                    <div className="step-back">
                        <h3>About</h3>
                        <p>We are ONTON purely backed by TON community</p>
                        <p>ONTON intend to create and has began creating a robust decentralized community "SLOGAN" that is here to stay and live on TON (The Open Network) forever.</p>
                    </div>
                    <div className="step-number">1</div>
                </div>

                <div className="step">
                    <div className="step-content">
                        <div className="step-icon">
                            <img src='../../Images/mn-logo.png' alt="Icon 2" />
                        </div>
                        <div className="tracing-light"></div>
                    </div>
                    <div className="step-back">
                        <h3>About</h3>
                        <p>We are ONTON purely backed by TON community</p>
                        <p>ONTON intend to create and has began creating a robust decentralized community "SLOGAN" that is here to stay and live on TON (The Open Network) forever.</p>
                    </div>
                    <div className="step-number">2</div>
                </div>

                <div className="step">
                    <div className="step-content">
                        <div className="step-icon">
                            <img src='../../Images/mn-logo.png' alt="Icon 3" />
                        </div>
                        <div className="tracing-light"></div>
                    </div>
                    <div className="step-back">
                        <h3>About</h3>
                        <p>We are ONTON purely backed by TON community</p>
                        <p>ONTON intend to create and has began creating a robust decentralized community "SLOGAN" that is here to stay and live on TON (The Open Network) forever.</p>
                    </div>
                    <div className="step-number">3</div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
