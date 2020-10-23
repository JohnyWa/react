import React from "react";

export default class TodoItem extends React.Component{
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