import React, {Component} from "react";

export default class TodoForm extends Component{
  render() {
    const {inputValue, onChangeHandler, onSubmitHandler} = this.props;
    return(
      <form>
        <input type="text" onChange={onChangeHandler} value={inputValue}/>
        <button onClick={onSubmitHandler} type="submit">Send</button>
      </form>
    );
  }
}