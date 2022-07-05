import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner = props => {
  return (
    <div className="loading-spinner">
      <div className="lds-dual-ring" data-testid="lodading_spinner-test"></div>
    </div>
  );
};

export default LoadingSpinner;