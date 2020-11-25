import React, { Component } from 'react';
import LoginForm from "./loginForm";
import {connect} from "react-redux";
import {login} from "../../asyncActions/authAsyncActions";

class LoginMain extends Component{
    onSubmitHandler = formData => {
        this.props.login(formData);
    }

    render() {
        return(
            <LoginForm onSubmitHandler={this.onSubmitHandler} />
        )
    }
}

const mapStateToDispatch = {
    login
}

export default connect(null, mapStateToDispatch)(LoginMain);
