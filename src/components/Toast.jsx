import React from 'react';
import '../styles/Toast.css';

const Toast = ({ message }) => {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast-message">
        {message}
      </div>
    </div>
  );
};

export default Toast;
