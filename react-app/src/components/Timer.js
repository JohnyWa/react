import React, { Component } from "react";

export default class Timer extends Component{
 state = {
   currTime: new Date().toLocaleTimeString()
 };

 intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ currTime: new Date().toLocaleTimeString()}), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { currTime } = this.state;

    return(
      <div>
        <h2>{currTime}</h2>
      </div>
    )
  }
}