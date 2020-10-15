import React, {Component} from "react";
import {allPosts} from "../api/api";
import {Link} from "react-router-dom";

export default class Posts extends Component{
  state = {
    posts: []
  };

  componentDidMount() {
    allPosts().then(posts => this.setState({posts}))
  }

  render() {
    const { posts } = this.state;
    const { match } =this.props;

    return(
      <>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`${match.url}/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
}