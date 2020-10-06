import React, { Component } from "react";

export default class Filters extends Component{
  render() {
    const {filteredData, filter} = this.props;

    return(
      <>
        <input onChange={filteredData} type="text" value={filter}/>
      </>
    )
  }
}