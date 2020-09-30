import React from "react";

export default class StateComponent extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: "Counter!!!!",
      value: this.props.startValue,
      isShow: true
    };
  }

  // state = {
  //   title: "Peter",
  // startValue: this.props.startValue
  // };

  incrementHandler = () => {
    this.setState((prevState, props) => {
      return {
        value: prevState.value + props.step
      }
    });
  };

  decrementHandler = () => {
    this.setState((prevState, props) => {
      return {
        value: prevState.value - props.step
      }
    });
  };

  hideTitleHandler = () => {
    this.setState({isShow: false});
  };

  render() {
    const { title, value, isShow } = this.state;

    return(
      <>
        {isShow && <h1>TEXT</h1>}
        <div>{title}</div>
        <br />
        <div>{value}</div>
        <button
          onClick={this.incrementHandler}
        >
          Increment counter
        </button>
        <button
          onClick={this.decrementHandler}
        >
          Decrement counter
        </button>
        <button
          onClick={this.hideTitleHandler}
        >
          hide title!
        </button>
      </>
    );
  }
}