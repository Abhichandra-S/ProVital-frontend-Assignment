// Movement.js
import React from 'react';
import '../styles/Movement.css'; // Import the CSS file


function Movement() {
    {/*const scrollRef = useRef(null);

    const slideLeft = () => {
        scrollRef.current.scrollBy({
            left: -300, // Adjust this based on card width + gap
            behavior: 'smooth',
        });
    };

    const slideRight = () => {
        scrollRef.current.scrollBy({
            left: 300,
            behavior: 'smooth',
        });
    };*/}


    return (
        <div className="pillars-container">
            <div className="pillars-content-cards">
                <div className="pillars-content-card">
                    <img src={'/assets/b1.png'} alt="Cooking" className="pillars-image" />
                    <div className="pillars-icon">
                        <img src={'/assets/c1.png'} alt="Symbol1" />
                        <p className="txd">121/80 mmHg</p>
                    </div>
                    <h4>Nutrition</h4>
                    <p>Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.</p>
                </div>
                <div className="pillars-content-card">
                    <img src={'/assets/b2.png'} alt="physical activity" className="pillars-image" />
                    <div className="pillars-icon">
                        <img src={'/assets/c2.png'} alt="Symbol2" />
                        <p>32 minutes</p>
                    </div>
                    <h4>Physical Activity</h4>
                    <p>Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.</p>
                </div>
                <div className="pillars-content-card">
                    <img src={'/assets/b3.png'} alt="restorative sleep" className="pillars-image" />
                    <div className="pillars-icon">
                        <img src={'/assets/c3.png'} alt="Symbol3" />
                        <p>8 hours</p>
                    </div>
                    <h4>Restorative Sleep</h4>
                    <p>Consistent, quality sleep is essential for cognitive function and physical health.</p>
                </div>
                <div className="pillars-content-card">
                    <img src={'/assets/b4.png'} alt="social connection" className="pillars-image" />
                    <div className="pillars-icon">
                        <img src={'/assets/c4.png'} alt="Symbol4" />
                        <p>Feeling Better</p>
                    </div>
                    <h4>Social Connection</h4>
                    <p>Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.</p>
                </div>
                <div className="pillars-content-card">
                    <img src={'/assets/b5.png'} alt="stress management" className="pillars-image" />
                    <div className="pillars-icon">
                        <img src={'/assets/c5.png'} alt="Symbol5" />
                        <p>60bpm</p>
                    </div>
                    <h4>Stress Management</h4>
                    <p>Effective stress management techniques are crucial for mental well-being and overall health.</p>
                </div>
                <div className="pillars-content-card">
                    <img src={'/assets/b6.png'} alt="substance abuse" className="pillars-image" />
                    <div className="pillars-icon">
                        <img src={'/assets/c6.png'} alt="Symbol6" />
                        <p>62 days</p>
                    </div>
                    <h4>Substance Abuse</h4>
                    <p>Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.</p>
                </div>
            </div>
        </div>
    );
}

export default Movement;
