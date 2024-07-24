import React from 'react';
import '../Components/Jointeam.css'; // Updated path to match the new CSS file

const Jointeam = () => {
    return (
        <div className="jointeam-container">
            <h1 className="jointeam-title">JOIN THE ONTON</h1>
            <div className="jointeam-steps">
                <div className="jointeam-step">
                    <div className="jointeam-step-content">
                        <div className="jointeam-icon">
                            <img src='../../Images/build-re.png' alt="Icon 1" />
                        </div>
                        <div className="jointeam-tracing-light"></div>
                    </div>
                    <div className="jointeam-step-back">
                        <h3>Let's BUILD ONTON</h3>
                        <p>Where community, innovation, and the power of memes unite to drive the future of TON, The Open Network. Together, let's create endless opportunities and make TON the cornerstone of tomorrow's decentralized world.</p>
                    </div>
                </div>

                <div className="jointeam-step">
                    <div className="jointeam-step-content">
                        <div className="jointeam-icon">
                            <img src='../../Images/grow-re.png' alt="Icon 2" />
                        </div>
                        <div className="jointeam-tracing-light"></div>
                    </div>
                    <div className="jointeam-step-back">
                        <h3>Let's be a part of ONTON's GROWTH</h3>
                        <p>Our mission is to amplify TON, The Open Network, by uniting a passionate community and harnessing the viral power of memes. Together, we can grow ONTON into a powerhouse of connectivity and advancement.</p>
                    </div>
                </div>

                <div className="jointeam-step">
                    <div className="jointeam-step-content">
                        <div className="jointeam-icon">
                            <img src='../../Images/earn-re.png' alt="Icon 3" />
                        </div>
                        <div className="jointeam-tracing-light"></div>
                    </div>
                    <div className="jointeam-step-back">
                        <h3>Let's EARN with ONTON!</h3>
                        <p>By joining our community and participating in our initiatives, you can benefit from the growth and success of TON, The Open Network. Together, let's build a future where everyone can earn and thrive with ONTON.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Jointeam;
