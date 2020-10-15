import React from "react";
import {allPosts, getPostById} from "../api/api";

export default class PostDetails extends React.Component{
  state = {
    post: {}
  };

  componentDidMount() {
    const {match} = this.props;
    getPostById(match.params.postId).then(post => this.setState({post}))
  }

  render() {
    const {post} = this.state;

    return(
      <>
        <h2>{post.title}</h2>
        <div>
          {post.body}
        </div>
      </>
    )
  }
}