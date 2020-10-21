import React from "react";
import UserContext from "../contexts/userContext";

const withUser = Component => {
  return function WithUser(props) {
    return (
      <UserContext.Consumer>
        {ctx => <Component {...props} userData={ctx}/>}
      </UserContext.Consumer>
    )
  }
};

export default withUser;