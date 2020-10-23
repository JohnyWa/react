import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import '../styles.css';
import './gallery.css';

export default class Gallery extends React.Component{
  state = {
    images: [],
    activeSlide: 0
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
      .then(response => response.json())
      .then(json => this.setState({images: json}))
  }

  prevHandler = () => {
    this.setState({activeSlide: this.state.activeSlide - 1})
  };

  nextHandler = () => {
    this.setState({activeSlide: this.state.activeSlide + 1})
  };

  render() {
    const {images, activeSlide} = this.state;
    const currImage = images[activeSlide];


    return (
      <div className="gallery">
        <div className="gallery-btn-box">
          <button disabled={activeSlide === 0} onClick={this.prevHandler}>Prev</button>
          <button disabled={activeSlide === images.length - 1} onClick={this.nextHandler}>Next</button>
        </div>
        <TransitionGroup className="gallery-box">
          {currImage &&
            <CSSTransition
              key={currImage.url}
              timeout={300}
              classNames="slide-item"
            >
              <img className="gallery-box__item" src={currImage.url} alt={currImage.title} />
            </CSSTransition>
          }
        </TransitionGroup>
      </div>
    );
  }
}