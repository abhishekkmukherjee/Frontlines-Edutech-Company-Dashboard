import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <span style={{ color: '#6b7280' }}>Loading companies...</span>
    </div>
  );
};

export default LoadingSpinner;