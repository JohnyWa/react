import React, { Component } from "react";
import '../styles.css';

export default class Modal extends Component{
  componentDidMount() {
    console.log('componentDidMount_____');
    window.addEventListener('keydown',
      this.keyDownEventListenerHandler)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount_____');
    window.removeEventListener('keydown', this.keyDownEventListenerHandler)
  }

  keyDownEventListenerHandler = event => {
   if(event.code === 'Escape') {
        console.log(event.code);
        this.props.closeHandler();
      }
  };

  render() {
    const { closeHandler } = this.props;
    console.log('render_____');

    return (
      <>
        <div className="modal-window">
          <h2 onClick={closeHandler}>X</h2>
          {this.props.children}
        </div>
      </>
    );
  }
}