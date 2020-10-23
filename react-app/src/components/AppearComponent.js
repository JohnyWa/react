import React from "react";
import {CSSTransition} from "react-transition-group";
import './apear.css';

export default class AppearComponent extends React.Component{
  render() {
    return (
      <CSSTransition
        in={true}
        appear={true}
        timeout={250}
        classNames="show"
        unmountOnExit
      >
        {stage => {
          console.log(stage);
          return(
            <div>
              <h2>What is Lorem Ipsum?</h2>

              <CSSTransition
                in={stage === 'entered'}
                timeout={250}
                classNames="img-fade"
                unmountOnExit
              >
                <div className="img-box">
                  <img className="img" src="https://via.placeholder.com/600/92c952" alt="some text"/>
                </div>
              </CSSTransition>

              <CSSTransition
                in={stage === 'entered'}
                timeout={250}
                classNames="text-fade"
                unmountOnExit
              >
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                  it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.

                  Why do we use it?
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                  opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).
                </div>
              </CSSTransition>
            </div>
          )
        }}
      </CSSTransition>)
  }
}