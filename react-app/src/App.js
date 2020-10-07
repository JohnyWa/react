import React from 'react';
import Tabs from "./components/Tabs";
// import Modal from "./components/Modal";
// import Timer from "./components/Timer";
// import Main from "./components/mainTodoList";

const TABS_DATA = [
  {id: 1, title: "1-tab",  desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "},
  {id: 2, title: "2-tab", desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"},
  {id: 3, title: "3-tab", desc: "What is Lorem Ipsum"}
];

export default class App extends React.Component{
  state = {
    isOpen: false
  };

  // modalHandler = () => {
  //   this.setState(prev => ({ isOpen: !this.state.isOpen}))
  // };
  //
  // closeHandler = () => this.setState({isOpen: false});

  render() {
    // const { isOpen } = this.state;

    return (
      <div className="App">
        {/*<Main />*/}
        {/*<button onClick={this.modalHandler}>*/}
        {/*  {isOpen ? 'Hide': 'Show' } Timer*/}
        {/*</button>*/}
        {/*{isOpen &&*/}
        {/*  <Modal closeHandler={this.closeHandler}>*/}
        {/*    <h1>Modal window</h1>*/}
        {/*  </Modal>*/}
        {/*}*/}
        {/*{isOpen && <Timer />}*/}
        <Tabs tabsData={TABS_DATA} />
      </div>
    );
  }
}