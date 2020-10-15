import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import PostDetails from "./components/PostDetails";

export default class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/about"
            render={props => <About {...props} extraPropName="Necessary prop!!!" />}
          />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/:postId" component={PostDetails} />
          <Route component={NotFound} />
          {/*<Redirect to="/" />*/}
        </Switch>
      </div>
    );
  }
}