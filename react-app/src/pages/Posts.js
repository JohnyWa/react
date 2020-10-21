import React, {Component} from "react";
import withFetch from "../Hoc/withFetch";

class Posts extends Component{
  render() {
    const { data } = this.props;
    return (
      <>
        <h1>Posts page!</h1>
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </>
    )
  }
}

export default withFetch('https://jsonplaceholder.typicode.com/posts?_limit=5')(Posts);