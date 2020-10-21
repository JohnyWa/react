import React, {Component} from "react";
import User from "./User";

export default class MainContact extends Component{
  render() {
    return(
      <>
         <h2>User info: </h2>
          <User/>
      </>
    )
  }
}