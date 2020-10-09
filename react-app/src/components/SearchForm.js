import React, { Component } from "react";

export default class SearchForm extends Component{
  state = {
    inputValue: ''
  };

  inputHandler = event => {
    this.setState({inputValue: event.target.value})
  };


  onSubmitHandler = event => {
    event.preventDefault();
    const { onSearch } = this.props;

    onSearch(this.state.inputValue);
    this.setState({inputValue: ''})
  };

  render() {
    const { inputValue } = this.state;

    return(
      <form onSubmit={this.onSubmitHandler}>
        <label>
          Search:
          <input
            onChange={this.inputHandler}
            value={inputValue}
            type="text"
          />
        </label>
        <button type="submit">
          Find
        </button>
      </form>
    );
  }
}