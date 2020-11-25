import React, {Component} from "react";
import {connect} from "react-redux";
import './style.css';
import {getUserName} from "../../selectors/authSelectors";
import {logout} from "../../asyncActions/authAsyncActions";

class UserInfo extends Component {
    logoutHandler = () => {
        this.props.logout();
    }

    render() {
        const {userName} = this.props;

        return(
            <>
                {userName && <div className="user-info">
                    <span>Hi, {userName} </span>
                    <button onClick={this.logoutHandler}>Logout</button>
                </div>}
            </>
        )
    }
}

const mapStateToProps = state => ({
    userName: getUserName(state)
})

const mapStateToDispatch = {
    logout
}

export default connect(mapStateToProps, mapStateToDispatch)(UserInfo);
