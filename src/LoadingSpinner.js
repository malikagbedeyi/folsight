import React from 'react';
import './Loading.css'
import img1 from '../src/assets/Images/burnning.png'

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
        <div className='loading-cover'></div>
      {/* You can customize this with any loading animation */}
      <div className="spinner"><img src={img1} alt='loading...'/></div>
    </div>
  );
};

export default LoadingSpinner;
