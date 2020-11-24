import React, { Component } from 'react';
import './style.css';

class LoginForm extends Component{
    state = {
        email: '',
        password: ''
    }

    onSubmit = event => {
        event.preventDefault();

        this.props.onSubmitHandler(this.state)
    }

    onChangeHandler = event => {
        const { value, name } = event.target

        this.setState({[name]: value})
    }

    render() {
        const { email, password } = this.state;

        return(
            <form onSubmit={this.onSubmit} className="login-form">
                <label className="login-form__label-box">
                    Enter your email please:
                    <input
                        name="email"
                        className="login-form__input"
                        type="email"
                        value={email}
                        onChange={this.onChangeHandler}
                    />
                </label>

                <label className="login-form__label-box">
                    Enter your password please:
                    <input
                        name="password"
                        className="login-form__input"
                        type="password"
                        value={password}
                        onChange={this.onChangeHandler}
                    />
                </label>

                <button className="login-form__submit-btn">Submit</button>
            </form>
        )
    }
}

export default LoginForm;
