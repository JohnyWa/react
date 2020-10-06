import React from "react";

const TodoItem = ({title, id, removeHandler}) => {
  const removeTodo = () => {
    removeHandler(id)
  };

  return(
    <li className="list-item">
      <span>{title}</span>
      <button onClick={removeTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;