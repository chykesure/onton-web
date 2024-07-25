import React, { useEffect } from 'react';
import '../Components/Vision.css';

const Vision = () => {
    useEffect(() => {
        const visionContent = document.querySelectorAll('.vision-content');
        visionContent.forEach(content => content.classList.add('visible'));
    }, []);

    return (
        <div className="vision-container">
            <h1 className="vision-title">OUR VISION</h1>
            <div className="vision-content">
                <div className="vision-image">
                    <div className="spotlight"></div>
                    <div className="dog-image"></div>
                </div>
                <div className="vision-text">
                    <p>
                        ONTON is determined to maximize growth and adoption of TON (The Open Network) by integrating, through its community, magical "TICKER" and memes, while creating oppurtunities to build ONTON.
                    </p>
                </div>
            </div>
            <div className="vision-content reverse-order">
                <div className="vision-text">
                    <p>ONTON intends to create and has began creating a robust decentralized community "SLOGAN" meme taht is here to stay and live on TON (The Open Network) forever.
                    </p>
                </div>
                <div className="vision-image">
                    <div className="spotlight"></div>
                    <div className="dog-image"></div>
                </div>
            </div>
            <div className="vision-content">
                <div className="vision-image">
                    <div className="spotlight"></div>
                    <div className="dog-image"></div>
                </div>
                <div className="vision-text">
                    <p>ONTON is the most relatable and undeniable "TICKER" meme on the TON Blockchain, as we all know; all TON community users are all on TON. We are ONTON.</p>
                </div>
            </div>
        </div>
    );
}

export default Vision;
