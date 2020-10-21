import React, {Component} from "react";
import Greeting from "../components/Greeting";

export default class Home extends Component{
  render() {
    return(
      <>
        <h1>Home page!</h1>
        <Greeting />
      </>
    )
  }
}