import React from "react";
// import './style.css';

const CssStyles = ({name}) => {
  return (
    <div className="container">
      <h2>Title</h2>
      <div>User name {name}</div>
      <div>
        <img className="container__img" src="https://i1.wp.com/static.teamtreehouse.com/assets/content/default_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png?ssl=1" alt={name} />
      </div>
    </div>
  );
};

export default CssStyles;