import React from "react";

export default class TodoForm extends React.Component{
  state = {
    value: ''
  };

  inputHandler = event => {
    this.setState({value: event.target.value})
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({value: ''})
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <label>
          <input type="text" value={this.state.value} onChange={this.inputHandler}/>
        </label>
        <button type="submit">Add Todo!</button>
      </form>
    )
  }
}
