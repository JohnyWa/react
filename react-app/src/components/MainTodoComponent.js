import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default class MainTodoComponent extends React.Component{
  state = {
    todos: []
  };

  addTodo = data => {
    if(!data) {
      return null;
    }

    this.setState({todos: [...this.state.todos, {title: data, id: Date.now()}]})
  };

  removeTodo = id => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
  };

  render() {
    const {todos} = this.state;
    return (
      <>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList removeTodo={this.removeTodo} todos={todos}/>
      </>
    )
  }
}