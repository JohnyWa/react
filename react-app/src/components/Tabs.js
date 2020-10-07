import React, { Component } from "react";
import '../styles.css';
import Tab from "./Tab";

export default class Tabs extends Component{
  state = {
    activeTab: 0
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTab !== this.state.activeTab ;
  }

  tabChangeHandler = id => {
    this.setState({activeTab: id})
  };

  render() {
    const { tabsData } = this.props;
    const { activeTab } = this.state;

    const currTab = tabsData[activeTab];
    console.log('RENDER');
    return(
      <>
        <div className="tabs-labels">
          {tabsData.map((tab, index) =>
            <Tab
              key={tab.id}
              id={index}
              title={tab.title}
              tabChangeHandler={this.tabChangeHandler}
              />
            )
          }
        </div>
        <div>{currTab.desc}</div>
      </>
    )
  }
}