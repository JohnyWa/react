import React, {Component} from "react";

export default class TodoForm extends Component{
  render() {
    const {inputValue, onChangeHandler, onSubmitHandler} = this.props;

    return(
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={onChangeHandler} value={inputValue}/>
        <button type="submit">Send</button>
      </form>
    );
  }
}