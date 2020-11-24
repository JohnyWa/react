import React from "react";
import {connect} from "react-redux";
import {getCount} from "../redux/selectors/counterSelector";
import {addCount} from "../redux/actions/counterAction";

class TodoForm extends React.Component{
  state = {
    value: ''
  };

  inputHandler = event => {
    this.setState({value: event.target.value})
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({value: ''})
  };

  counterHandler = () => {
    this.props.addCount();
  }

  render() {
    const { counter } = this.props;
    return (
      <>
        <button onClick={this.counterHandler}>Add count</button>
        <h2>{counter}</h2>
        <form onSubmit={this.onSubmitHandler}>
          <label>
            <input type="text" value={this.state.value} onChange={this.inputHandler}/>
          </label>
          <button type="submit">Add Todo!</button>
        </form>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: getCount(state)
})

const mapStateToDispatch = {
  addCount
}

export default connect(mapStateToProps, mapStateToDispatch)(TodoForm);
