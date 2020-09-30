import React, {Component} from "react";
import TodoList from "./todoList";
import TodoForm from "./todoForm";

export default class Main extends Component{
  state = {
    todos: [],
    inputValue: ''
  };

  addTodo = event => {
    event.preventDefault();
    const myTodo = {
      title: this.state.inputValue,
      id: Date.now()
    };

    this.setState(prev => {
      return {
        todos: [...prev.todos, myTodo],
        inputValue: ''
      }
    })
  };

  onChangeHandler = event => {
    this.setState({inputValue: event.target.value})
  };

  render() {
    const {todos, inputValue} = this.state;
    return(
      <>
        <h3>Main</h3>
        <TodoList todos={todos}/>
        <TodoForm
          onSubmitHandler={this.addTodo}
          inputValue={inputValue}
          onChangeHandler={this.onChangeHandler}
        />
      </>
    );
  }
}