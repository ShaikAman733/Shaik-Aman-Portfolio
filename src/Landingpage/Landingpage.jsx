import React, { useState, useEffect } from 'react';
import './LandingPage.css';
function LandingPage({ onEnter }) {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowPopup(true);
    }, 2500);


    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 6500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="landing-page" onClick={onEnter}>
      <h3 className="fade-in-text"> Student dev turning ideas into clean UI</h3>
      <h3 className="fade-in-text">Tap anywhere</h3>
    </div>
  );
}

export default LandingPage;