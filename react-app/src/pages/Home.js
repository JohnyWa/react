import React, {Component} from "react";
import MainTodoComponent from "../components/MainTodoComponent";

export default class Home extends Component{
  render() {
    return(
      <>
        <h1>Home page!</h1>
        <MainTodoComponent />
      </>
    )
  }
}