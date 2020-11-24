import React, { Component } from 'react';
import './style.css';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
}

class RegistrationForm extends Component{
    state = {
        ...INITIAL_STATE
    }

    onSubmit = event => {
        event.preventDefault();

        this.props.onSubmitHandler(this.state)
        this.setState({...INITIAL_STATE})
    }

    onChangeHandler = event => {
        const { value, name } = event.target

        this.setState({[name]: value})
    }

    render() {
        const { name, email, password } = this.state;
        return(
            <form onSubmit={this.onSubmit} className="registration-form">
                <label className="registration-form__label-box">
                    Enter your name please:
                    <input
                        name="name"
                        className="registration-form__input"
                        type="text"
                        value={name}
                        onChange={this.onChangeHandler}
                    />
                </label>

                <label className="registration-form__label-box">
                    Enter your email please:
                    <input
                        name="email"
                        className="registration-form__input"
                        type="email"
                        value={email}
                        onChange={this.onChangeHandler}
                    />
                </label>

                <label className="registration-form__label-box">
                    Enter your password please:
                    <input
                        name="password"
                        className="registration-form__input"
                        type="password"
                        value={password}
                        onChange={this.onChangeHandler}
                    />
                </label>

                <button className="registration-form__submit-btn">Submit</button>
            </form>
        )
    }
}

export default RegistrationForm;
