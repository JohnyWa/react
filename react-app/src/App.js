import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import UseCallback from "./pages/UseCallback";

export default class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Navigation />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/useCallback">
              <UseCallback />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
      </div>
    );
  }
}
