import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {connect} from "react-redux";
import {addAsyncTodo, getAllTodos} from "../redux/asyncActions/todoAsyncActions";
import {
  getLoadingStatus,
  getPairIdTodos, getTodoByID,
  getTodos,
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

  counterHandler = (event) => {
    this.props.addCount()
  }

  render() {
    const { todos, hasWrongWords, loading, counter } = this.props;

    return (
      <>
        {hasWrongWords && <h2>This word is bad!!</h2>}
        {loading && <h2>Loading....</h2>}
        <h3>Count: {counter}</h3>
        <button onClick={this.counterHandler}>Add count</button>
        <hr />
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={todos}/>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: getTodos(state),
  hasWrongWords: getWrongWordsStatus(state),
  loading: getLoadingStatus(state),
  pairIdTodos: getPairIdTodos(state),
  todoByID: (id) => getTodoByID(state, id),
  counter: getCount(state)
})

const mapStateToDispatch = {
  addAsyncTodo,
  getAllTodos,
  addCount
}


export default connect(mapStateToProps,mapStateToDispatch)(MainTodoComponent);
