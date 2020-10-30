import React, {Component} from "react";
import TextContainer from "../components/TextComponent";
import BackToTop from "../components/BackToTop";
import ScrollToElementById from "../components/ScrollToElement";
import withScrollTo from "../hoc/scrollTo";

class Home extends Component{
  render() {
    return(
      <>
        <h1>Home page!</h1>
        <ScrollToElementById id="someId"/>
        <TextContainer blocksCount={5}/>
        <div id="someId">Scroll here</div>
        <BackToTop />
      </>
    )
  }
}

export default withScrollTo()(Home);