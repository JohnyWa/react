import React, {useCallback, useState} from "react";
import CounterComponent from "../components/CounterComponent";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [colored, setColored] = useState(false)

  const countHandler = () => {
    setCount(prev => prev + 1)
  }

  const changeColoredHandler = () => {
    setColored(prev => !prev)
  }

  const doubleNumber = useCallback(() => {
    return count * 2;
  }, [count])

  const styles = { color: colored ? 'orange' : 'black'}

  return(
    <>
      <h2 style={styles}>UseCallback component</h2>
      <br />
      <h2>Current count: {count}</h2>
      <button onClick={countHandler}>Add count!</button>
      <button onClick={changeColoredHandler}>Change color!</button>
      <CounterComponent doubleNumber={doubleNumber} />
    </>
  )
}

export default UseCallback;
