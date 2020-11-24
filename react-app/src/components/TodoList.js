import React from "react";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import TodoItem from "./TodoItem";
import '../styles.css';
import './todoList.css';
import {connect} from "react-redux";
import {getPairIdTodos, getPairIdTodosClassic, getTodos} from "../redux/selectors/todosSelectors";

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;

    console.log('TODO_LIST_RENDER')
    return (
      <TransitionGroup component="ul" className="todo-list">
        {todos.map(todo => (
          <CSSTransition
            key={todo.id}
            timeout={500}
            classNames="todo-item"
          >
            <TodoItem todo={todo} id={todo.id}/>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: getPairIdTodos(state),
})

export default connect(mapStateToProps)(TodoList)
