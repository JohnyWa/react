import React from "react";

const SingleNew = ({title, author, urlToImage}) => {
  return(
    <li
      className="app-list-box__item"
    >
      <p>{title}</p>
      <span className="app-list-box__author">
        Author: {author}
      </span>
      <div className="app-list-box__img-box">
        <img
          className="app-list-box__img"
          src={urlToImage}
          alt={title}
        />
      </div>
    </li>
  );
};

export default SingleNew;