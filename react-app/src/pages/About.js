import React, {Component} from "react";

export default class About extends Component{
  render() {
    return(
      <h1>About page! {this.props.extraPropName}</h1>
    )
  }
}