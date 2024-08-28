import React from 'react';
import './Loading.css'

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
        <div className='loading-cover'></div>
      {/* You can customize this with any loading animation */}
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
