import React from "react";
import withHigherOrderComponent from "../Hoc/withHigherOrderComponent";
import withLog from "../Hoc/withLog";
import withUser from "../Hoc/withUser";

const Greeting = props => {
  const {loadUser, user} = props.userData;

  if(!user) {
    return (
      <button onClick={loadUser}>Load user!</button>
    )
  }

  return (
    <h2>Hello {user.name} - {user.surname}</h2>
  )
};
export default withUser(withHigherOrderComponent(withLog(Greeting)));