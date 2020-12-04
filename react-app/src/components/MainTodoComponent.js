import React, {useEffect} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {useDispatch} from "react-redux";
import {addAsyncTodo, getAllTodos} from "../redux/asyncActions/todoAsyncActions";

const MainTodoComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos())
  }, [])

  const addTodo = data => {
    if(!data) {
      return null;
    }

    dispatch(addAsyncTodo(data));
  }

  return(
      <>
        <TodoForm addTodo={addTodo}/>
        <TodoList />
      </>
  )
}

export default MainTodoComponent;

// class MainTodoComponent extends React.Component{
//   componentDidMount() {
//     this.props.getAllTodos()
//   }
//
//   addTodo = data => {
//     if(!data) {
//       return null;
//     }
//
//     this.props.addAsyncTodo(data)
//   };
//
//
//   render() {
//     return (
//       <>
//         <TodoForm addTodo={this.addTodo}/>
//         <TodoList />
//       </>
//     )
//   }
// }
//
// const mapStateToDispatch = {
//   addAsyncTodo,
//   getAllTodos,
// }
//
//
// export default connect(null,mapStateToDispatch)(MainTodoComponent);
