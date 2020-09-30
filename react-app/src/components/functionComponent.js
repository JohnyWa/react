import React from "react";

const FunctionComponent = ({num, title, start}) => {
  return (
    <div>FunctionComponent: {title}: {num} - {start}</div>
  )
};

FunctionComponent.defaultProps = {
  start: 'test'
};

export default FunctionComponent;