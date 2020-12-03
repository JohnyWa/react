import React, {useState} from "react";

// export default class UseState extends Component{
//   state = {
//     count: 0
//   }
//
//   incrementHandler = () => {
//     this.setState(prev => ({count: prev.count + 1}));
//   }
//
//
//
//   render() {
//     return(
//         <>
//           <h2>Counter: {this.state.count}</h2>
//           <button onClick={this.incrementHandler}>Increment</button>
//         </>
//     )
//   }
// }

const UseState = () => {
  const [count, setCount] = useState(0)
  const [click, setClicked] = useState(false)

  const incrementHandler = () => {
    setCount(prev => prev + 1);
  }

  const clickHandler = () => {
    setClicked(true);
  }

  return (
      <>
        {click && <div>Clicked</div>}
        <h2>Counter: {count}</h2>
        <button onClick={clickHandler}>Click</button>
        <button onClick={incrementHandler}>Increment</button>
      </>
  )
}

export default UseState;
