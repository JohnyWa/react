import React from "react";
import SingleNew from "./SingleNews";

const NewsList = ({news}) => {
  return(
    <ul className="app-list-box">
      {news.map(singleNew =>
        <SingleNew
          key={`${singleNew.title}-${singleNew.author}`}
          title={singleNew.title}
          author={singleNew.author}
          urlToImage={singleNew.urlToImage}
        />
        )}
    </ul>
  );
};

export default NewsList;