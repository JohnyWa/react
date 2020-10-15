import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import PostDetails from "./components/PostDetails";
import asyncImportHoc from "./components/asyncHocImport";

// const aboutAsync = asyncImportHoc(() => import('./pages/About' /* webpackChunkName: "about-page" */));
const aboutAsync = lazy(() => import('./pages/About' /* webpackChunkName: "about-page" */));

const Loading = () => <div>loading...</div>;

export default class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Navigation />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={aboutAsync} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/posts/:postId" component={PostDetails} />
            <Route component={NotFound} />
            {/*<Redirect to="/" />*/}
          </Switch>
        </Suspense>
      </div>
    );
  }
}