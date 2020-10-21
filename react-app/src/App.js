import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import UserContext from "./contexts/userContext";

export default class App extends React.Component{
  render() {
    return (
      <UserContext>
        <div className="App">
          <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/posts" component={Posts} />
              <Route path="/contacts"  component={Contacts} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </UserContext>
    );
  }
}