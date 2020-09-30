import React, {Component} from "react";

export default class ClassComponent extends Component{
  static defaultProps = {
    start: 'test'
  };

  static propTypes = {};

  render() {
    const {title, num, start} = this.props;
    return (
      <div>ClassComponent: {title}: {num} - {start}</div>
    )
  }
}