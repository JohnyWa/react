import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {connect} from "react-redux";
import {addAsyncTodo, getAllTodos} from "../redux/asyncActions/todoAsyncActions";
import {
  getWrongWordsStatus
} from "../redux/selectors/todosSelectors";
import {addCount} from "../redux/actions/counterAction";
import {getCount} from "../redux/selectors/counterSelector";

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
    return (
      <>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList />
      </>
    )
  }
}

const mapStateToDispatch = {
  addAsyncTodo,
  getAllTodos,
}


export default connect(null,mapStateToDispatch)(MainTodoComponent);
