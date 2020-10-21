import React from "react";

const user = {
  name: "Peter",
  surname: "Parker",
  age: 23
};

const Context = React.createContext();

export default class UserContext extends React.Component{
  static Consumer = Context.Consumer;

  loadUser = () => {
    this.setState({user})
  };

  state = {
    user: null,
    loadUser: this.loadUser
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}



