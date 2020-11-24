import React, { Component } from 'react';
import RegistrationForm from "./registrationForm";
import {connect} from "react-redux";
import {registration} from "../../asyncActions/authAsyncActions";


class MainRegistration extends Component{
    onSubmitHandler = formData => {
        this.props.registration(formData)
    }

    render() {
        return(
            <RegistrationForm onSubmitHandler={this.onSubmitHandler} />
        )
    }
}

const mapStateToDispatch = {
    registration
}

export default connect(null, mapStateToDispatch)(MainRegistration);
