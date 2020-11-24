import React, { Component } from 'react';
import LoginForm from "./loginForm";

class LoginMain extends Component{
    onSubmitHandler = formData => {
        console.log(formData);
    }

    render() {
        return(
            <LoginForm onSubmitHandler={this.onSubmitHandler} />
        )
    }
}

export default LoginMain;
