import React, {Component} from "react";

export default class EventsExample extends Component{
  constructor() {
    super();

    this.btnHandler2 = this.btnHandler2.bind(this);
  }

  btnHandler = () => {
    console.log(this.props);
  };


  btnHandler2() {
    console.log(this.props);
  }

  render() {
    return(
      <>
        <button onClick={this.btnHandler}>Click me!</button>
        <button onClick={this.btnHandler2}>Click me2!</button>
        <button onClick={() => console.log(this.props)}>Click me3!</button>
      </>
    );
  }
}