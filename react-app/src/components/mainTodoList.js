import React, {Component} from "react";
import TodoList from "./todoList";
import TodoForm from "./todoForm";
import Filters from "../components_four_lesson/filter";

export default class Main extends Component{
  state = {
    todos: [],
    inputValue: '',
    filter: ''
  };

  addTodo = event => {
    event.preventDefault();

    const { inputValue } = this.state;

    if(!inputValue) {
      return null;
    }

    const myTodo = {
      title: inputValue,
      id: Date.now()
    };

    this.setState(prev => {
      return {
        todos: [...prev.todos, myTodo],
        inputValue: ''
      }
    })
  };

  deleteTodo = id => {
    const {todos} = this.state;
    const filteredTodos = todos.filter(todo => todo.id !== id);

    this.setState({todos: filteredTodos})
  };

  onChangeHandler = event => {
    this.setState({inputValue: event.target.value})
  };

  filteredData = event => {
    this.setState({filter: event.target.value})
  };

  filteredTodos = () => {
    const { todos, filter } = this.state;
    return todos.filter(todo => todo.title.includes(filter))
  };

  render() {
    const {inputValue, filter} = this.state;
    const todos = this.filteredTodos();

    return(
      <>
        <h3>Main</h3>
        <TodoList
          removeHandler={this.deleteTodo}
          todos={todos}
        />
        <TodoForm
          onSubmitHandler={this.addTodo}
          inputValue={inputValue}
          onChangeHandler={this.onChangeHandler}
        />
        <br />
        <Filters
          filter={filter}
          filteredData={this.filteredData}
        />
      </>
    );
  }
}