import React, {Component, Suspense, lazy} from "react";

const AsyncSomeComponent = lazy(() => import("../components/SomeComponent" /*webpackChunkName: "some-component" */));

export default class Home extends Component{
  render() {
    return(
      <>
        <h1>Home page!</h1>
        <br />
        <Suspense fallback={<h1>Loading.....</h1>}>
          <AsyncSomeComponent />
        </Suspense>
        <br />
      </>
    )
  }
}