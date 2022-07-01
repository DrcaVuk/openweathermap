import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner = props => {
  return (
    <div className="loading-spinner">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;