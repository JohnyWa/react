import React from "react";
import {connect} from "react-redux";
import {removeTodo} from "../redux/actions/todoActions";

class TodoItem extends React.Component{
  removeHandler = () => {
    const { todo, removeTodo } = this.props;

    removeTodo(todo.id);
  };

  render() {
    const { title } = this.props.todo;

    return (
      <li className="todo-item">
        {title}
        <span onClick={this.removeHandler} className="todo-item__close">x</span>
      </li>
    )
  }
}

const mapStateToDispatch = {
  removeTodo
}

export default connect(null, mapStateToDispatch)(TodoItem);
