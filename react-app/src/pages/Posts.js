import React, {Component} from "react";
import { CSSTransition } from 'react-transition-group'
import ToggleComponent from "../components/ToggleComponent";
import '../components/toggle.css';

class Posts extends Component{
  state = {
    isOpen: false
  };

  toggleHandler = () => {
    this.setState(prev => ({isOpen: !prev.isOpen}))
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <h1>Posts page!</h1>

        <button onClick={this.toggleHandler}>{isOpen ? 'Hide' : 'Show'}</button>
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames="toggle"
          unmountOnExit
          onEnter={() => console.log('onEnter event')}
          onEntering={() => console.log('onEntering event')}
          onEntered={() => console.log('onEntered event')}
        >
          <ToggleComponent />
        </CSSTransition>
      </>
    )
  }
}

export default Posts;