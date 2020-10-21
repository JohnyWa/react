import React, {Component} from "react";
import withUser from "../Hoc/withUser";

class User extends Component{
  render() {
    const {loadUser, user} = this.props.userData;

    if(!user) {
      return (
        <button onClick={loadUser}>Load user!</button>
      )
    }

    return(
      <div>
        <p>Name: {user.name}</p>
        <p>Surname: {user.surname}</p>
        <p>Age: {user.age}</p>
      </div>
    )
  }
}

export default withUser(User);