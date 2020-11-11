import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {connect} from "react-redux";
import {addMyTodo, removeTodo} from "../actions/todoActions";
import {addCount} from "../actions/countActions";

class MainTodoComponent extends React.Component{
  addTodo = data => {
    if(!data) {
      return null;
    }

    this.props.addMyTodo({title: data, id: Date.now()});
  };

  removeTodo = id => {
    // this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
    this.props.removeTodo(id)
  };

  render() {
    const { dateTodos, count, addCount } = this.props;

    return (
      <>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList removeTodo={this.removeTodo} todos={dateTodos}/>
        <p>Current count: {count}</p>
        <button onClick={addCount}>Add count</button>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  dateTodos: state.todos.myTodos,
  count: state.count.currentCount
})

const mapDispatchToProps = {
  addMyTodo,
  removeTodo,
  addCount
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTodoComponent);
