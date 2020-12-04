import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCount} from "../redux/selectors/counterSelector";
import {addCount} from "../redux/actions/counterAction";

const TodoForm = ({addTodo}) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const counterHandler = () => {
    dispatch(addCount())
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue('')
  };

  const inputHandler = event => {
    setValue(event.target.value);
  };

  const counter = useSelector(state => getCount(state))

  return(
      <>
        <button onClick={counterHandler}>Add count</button>
        <h2>{counter}</h2>
        <form onSubmit={onSubmitHandler}>
          <label>
            <input type="text" value={value} onChange={inputHandler}/>
          </label>
          <button type="submit">Add Todo!</button>
        </form>
      </>
  )
}

export default TodoForm;

// class TodoForm extends React.Component{
//   state = {
//     value: ''
//   };
//
//   inputHandler = event => {
//     this.setState({value: event.target.value})
//   };
//
//   onSubmitHandler = (event) => {
//     event.preventDefault();
//     this.props.addTodo(this.state.value);
//     this.setState({value: ''})
//   };
//
//   counterHandler = () => {
//     this.props.addCount();
//   }
//
//   render() {
//     const { counter } = this.props;
//     return (
//       <>
//         <button onClick={this.counterHandler}>Add count</button>
//         <h2>{counter}</h2>
//         <form onSubmit={this.onSubmitHandler}>
//           <label>
//             <input type="text" value={this.state.value} onChange={this.inputHandler}/>
//           </label>
//           <button type="submit">Add Todo!</button>
//         </form>
//       </>
//     )
//   }
// }
//
// const mapStateToProps = (state) => ({
//   counter: getCount(state)
// })
//
// const mapStateToDispatch = {
//   addCount
// }
//
// export default connect(mapStateToProps, mapStateToDispatch)(TodoForm);
