import React, { Component } from "react";
import '../styles.css';

export default class RegistrationForm extends Component{
  state = {
    name: '',
    email: '',
    password: '',
    checkboxValue: false,
    gender: null,
    age: ''
  };

  inputHandler = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      });
  };

  submitHandler = event => {
    event.preventDefault();

    console.table(this.state)
  };

  checkboxHandler = event => {
    this.setState({checkboxValue: event.target.checked})
  };

  radioHandler = event => {
    this.setState({gender: event.target.value})
  };

  selectorHandler = event => {
    this.setState({age: event.target.value})
  };

  render() {
    const {
      name,
      email,
      password,
      checkboxValue,
      gender,
      age
    } = this.state;

    return(
      <form onSubmit={this.submitHandler} className="form">
          <label className="form-label">
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.inputHandler}
            />
          </label>
        <label className="form-label">
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.inputHandler}
            />
          </label>
        <label className="form-label">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.inputHandler}
            />
          </label>
        <label className="form-label">
          Checkbox:
          <input
            type="checkbox"
            checked={checkboxValue}
            onChange={this.checkboxHandler}
          />
        </label>
        <div>
          Gender:
          <label className="form-label">
            Male:
            <input
              name="gender"
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={this.radioHandler}
            />
          </label>
          <label className="form-label">
            Female:
              <input
                type="radio"
                name="gender"
                checked={gender === "female"}
                value="female"
                onChange={this.radioHandler}
              />
          </label>
          <div>
            Age:
            <select name="age" value={age} onChange={this.selectorHandler}>
              <option value="" disabled>
                Chose your age:
              </option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </select>
          </div>
        </div>
        <br />
        <button disabled={!checkboxValue} type="submit">Send</button>
      </form>
    );
  }
}