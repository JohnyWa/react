import React from "react";

const Tab = ({ title, id, tabChangeHandler}) => {
  const tabHandler = () => {
    tabChangeHandler(id);
  };

  return (
    <button onClick={tabHandler}>
      {title}
    </button>
  )
};

export default Tab;