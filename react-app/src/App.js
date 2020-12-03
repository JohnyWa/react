import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UseState from "./pages/UseState";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import UseEffect from "./pages/UseEffect";
import UseMemo from "./pages/UseMemo";
import UseRef from "./pages/UseRef";
import UseContext from "./pages/UseContext";
import UseCustomHooks from "./pages/UseCustomHooks";

class App extends React.Component{
    render() {
        return (
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" exact component={UseState} />
              <Route path="/useEffect" component={UseEffect} />
              <Route path="/useMemo" component={UseMemo} />
              <Route path="/useRef" component={UseRef} />
              <Route path="/useContext" component={UseContext} />
              <Route path="/useCustomHooks" component={UseCustomHooks} />
              <Route component={NotFound} />
            </Switch>
          </div>
        );
    }
}


export default App;
