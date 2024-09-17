
import React, { useState, useEffect } from 'react';
import './newsCaster.scss'; // Optional CSS for styling the popup

const NewsCaster = () => {
        const [showPopup, setShowPopup] = useState(false);
      
        useEffect(() => {
          const userChoice = localStorage.getItem('newsletter');
          const declineTimestamp = localStorage.getItem('declineTimestamp');
      
          // Logic to determine whether to show the popup:
          if (!userChoice) {
            setShowPopup(true); // Show popup if the user has never made a choice
          } else if (userChoice === 'declined' && shouldShowAgain(declineTimestamp)) {
            setShowPopup(true); // Show popup again if they declined but the time limit has passed
          }
        }, []);
      
        // Helper function to determine if enough time has passed
        const shouldShowAgain = (declineTimestamp) => {
          const timeNow = new Date().getTime();
          const oneDayInMillis = 24 * 60 * 60 * 1000; // 1 day in milliseconds
      
          return declineTimestamp && (timeNow - parseInt(declineTimestamp) > oneDayInMillis);
        };
      
        const handleAccept = () => {
          localStorage.setItem('newsletter', 'accepted');
          setShowPopup(false);
          alert('Thank you for subscribing!');
        };
      
        const handleDecline = () => {
          localStorage.setItem('newsletter', 'declined');
          localStorage.setItem('declineTimestamp', new Date().getTime().toString()); // Save the current timestamp
          setShowPopup(false);
          alert('Maybe next time!');
        };
      
        return (
          <>
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-content">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Stay updated with the latest news and updates!</p>
                <div className="popup-buttons">
                  <button onClick={handleAccept}>Accept</button>
                  <button onClick={handleDecline}>Decline</button>
                </div>
              </div>
            </div>
          )}
        </>
        );
      };

export default NewsCaster
