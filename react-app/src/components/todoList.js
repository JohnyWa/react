import React from "react";

const TodoList = ({todos}) => {
  return(
    <>
      {todos.length > 0  && <ul>
        {todos.map(todo => (<li key={todo.id}>{todo.title}</li>))}
      </ul>}
    </>
  );
};

export default TodoList;