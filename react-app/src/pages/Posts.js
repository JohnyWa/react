import React, {Component} from "react";
import Loading from "../renderProp/Loading";

class Posts extends Component{
  render() {
    return (
      <>
        <h1>Posts page!</h1>
        <Loading url="https://jsonplaceholder.typicode.com/photos?_limit=5">
          {({ data, loading, error}) => (
            <>
              {loading ? (<h2>LOADing POSTS........</h2>) : (<div>
                {data.map(item => (
                  <img key={item.thumbnailUrl} src={item.thumbnailUrl}/>
                ))}
              </div>)}
            </>
          )}
        </Loading>
      </>
    )
  }
}

export default Posts;