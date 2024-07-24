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
                        ONTON is committed to maximizing the growth and adoption of TON, The Open Network. Our approach focuses on active community engagement and the power of memes to create a strong, vibrant ecosystem. By fostering a supportive community and leveraging viral content, we aim to increase awareness and usage of TON. Additionally, we are dedicated to creating numerous opportunities for developers, businesses, and individuals to build and innovate on TON, ensuring its long-term success and widespread integration.
                    </p>
                </div>
            </div>
            <div className="vision-content reverse-order">

                <div className="vision-text">
                    <p>
                        At ONTON, our vision is to revolutionize the digital landscape by driving the adoption and growth of The Open Network (TON). We envision a future where TON becomes the backbone of decentralized applications, fostering innovation and inclusion. Our mission is to create a vibrant ecosystem through active community engagement, education, and the promotion of cutting-edge technologies. By supporting developers, businesses, and individuals, we aim to unlock the full potential of TON, making it accessible and beneficial for everyone. We are committed to building a decentralized future where technology empowers people and communities worldwide.
                    </p>
                </div>
                <div className="vision-image">
                    <div className="spotlight"></div>
                    <div className="dog-image"></div>
                </div>

                

            </div>
        </div>
    );
}

export default Vision;
