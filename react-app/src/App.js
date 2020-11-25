import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {connect} from "react-redux";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Header from "./components/Header/Header";
import {currentUser} from "./asyncActions/authAsyncActions";

class App extends React.Component{
    componentDidMount() {
        this.props.currentUser();
    }

    render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/contacts"  component={Contacts} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToDispatch = {
    currentUser
}

export default connect(null, mapStateToDispatch)(App);
