import React from 'react';

const AlertError = ({ text = 'Something went wrong. Please, try again.' }) => {
  return (
    <div className="alert alert-danger">
      <b>Error</b>:
      <ul>
        {text}
      </ul>
    </div>
  );
};

export default AlertError;