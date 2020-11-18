import React from "react";
import {connect} from "react-redux";
import {removeTodo} from "../redux/actions/todoActions";
import {removeTodoByID} from "../redux/asyncActions/todoAsyncActions";

class TodoItem extends React.Component{
  removeHandler = () => {
    const { todo } = this.props;
    this.props.removeTodoByID(todo.id)
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
  removeTodo,
  removeTodoByID
}

export default connect(null, mapStateToDispatch)(TodoItem);
