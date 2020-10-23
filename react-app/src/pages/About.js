import React, {Component} from "react";
import Gallery from "../components/Gallery";
import GallerySwitchTransition from "../components/GallerySwitchTransition";

class About extends Component{
  render() {

    return(
      <>
        <h1>About page!</h1>
        <Gallery />
        <GallerySwitchTransition />
      </>
    )
  }
}

export default About;