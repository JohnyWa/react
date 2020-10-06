import React, {Component} from "react";

export default class Form extends Component{
  state = {
    value: '',
    formData: ''
  };

  inputHandler = event => {
    this.setState({ value: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.setState({ formData: this.state.value });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.submitHandler}>
        <label>
          Some text:
          <input
            type="text"
            value={value}
            onChange={this.inputHandler}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    )
  }
}