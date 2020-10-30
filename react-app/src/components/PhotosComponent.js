import React from "react";
import withFetch from "../hoc/withFetch";
import withLoader from "../hoc/withLoader";
import Loading from "../renderProp/Loading";

//https://jsonplaceholder.typicode.com/photos?_limit=5

class PhotosComponent extends React.Component{
  render() {
    return (
      <div>
        <Loading url="https://jsonplaceholder.typicode.com/photos?_limit=5">
          {({ data, loading, error}) => (
            <>
            {loading ? (<h2>LOAD........</h2>) : (<div>
                {data.map(item => (
                  <img key={item.thumbnailUrl} src={item.thumbnailUrl}/>
                ))}
              </div>)}
            </>
          )}
        </Loading>
      </div>
    );
  }
}

export default PhotosComponent;