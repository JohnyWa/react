import React from "react";
import '../styles.css';

const Error = ({error}) => {
  return(
    <div className="error-box">
      {error}
    </div>
  )
};

export default Error;