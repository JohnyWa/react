import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {connect} from "react-redux";
import {addAsyncTodo, getAllTodos, removeTodoByID} from "../redux/asyncActions/todoAsyncActions";

class MainTodoComponent extends React.Component{
  componentDidMount() {
    this.props.getAllTodos()
  }

  addTodo = data => {
    if(!data) {
      return null;
    }

    this.props.addAsyncTodo(data)
  };


  render() {
    const { dateTodos, hasWrongWords, loading } = this.props;

    return (
      <>
        {hasWrongWords && <h2>This word is bad!!</h2>}
        {loading && <h2>Loading....</h2>}
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={dateTodos}/>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  dateTodos: state.todos.myTodos,
  hasWrongWords: state.todos.hasWrongWords,
  loading: state.todos.loading
})

const mapStateToDispatch = {
  addAsyncTodo,
  getAllTodos,
}


export default connect(mapStateToProps,mapStateToDispatch)(MainTodoComponent);
