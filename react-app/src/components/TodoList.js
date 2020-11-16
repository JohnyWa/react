import React from "react";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import TodoItem from "./TodoItem";
import '../styles.css';
import './todoList.css';

export default class extends React.Component {
  render() {
    const { todos, removeTodo } = this.props;

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
