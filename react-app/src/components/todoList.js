import React from "react";
import '../styles.css';
import TodoItem from "./todoIdem";

const TodoList = ({todos, removeHandler}) => {
  return(
    <>
      {todos.length > 0  && <ul className="todo-list">
        {todos.map(todo =>
          <TodoItem
            key={todo.id}
            title={todo.title}
            id={todo.id}
            removeHandler={removeHandler}
          />)
        }
      </ul>}
    </>
  );
};

export default TodoList;