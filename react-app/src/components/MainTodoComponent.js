import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {connect} from "react-redux";
import {addMyTodo, addTodoWithCustomPayload} from "../redux/actions/todoActions";

class MainTodoComponent extends React.Component{
  addTodo = data => {
    if(!data) {
      return null;
    }

    this.props.addMyTodo({title: data, id: Date.now()});
    this.props.addTodoWithCustomPayload(data)
  };

  removeTodo = id => {
    this.props.removeTodo(id)
  };

  render() {
    const { dateTodos } = this.props;

    return (
      <>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList removeTodo={this.removeTodo} todos={dateTodos}/>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  dateTodos: state.todos.myTodos,
})

const mapStateToDispatch = {
  addMyTodo,
  addTodoWithCustomPayload
}


export default connect(mapStateToProps,mapStateToDispatch)(MainTodoComponent);
