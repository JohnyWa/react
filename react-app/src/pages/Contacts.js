import React, {Component} from "react";
import MainContact from "../components/MainContact";

export default class Contacts extends Component{
  render() {
    return(
      <>
        <h1>Contacts page!</h1>
        <MainContact />
      </>
    )
  }
}