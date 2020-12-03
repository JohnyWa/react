import React, {useEffect, useState} from "react";

const UseEffect = () => {
    // const [count, setCount] = useState(0)
    // const [value, setValue] = useState('')
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler);
        console.log('UseEffect ComponentDidMount')

        return function() {
            console.log('UseEffect componentWillUnmount')
            window.removeEventListener('mousemove', mouseMoveHandler);
        }
    }, []);


    const mouseMoveHandler = event => {
        console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
        setPos({
            x: event.clientX,
            y: event.clientY
        });
    };
    // useEffect(() => {
    //     console.log('UseEffect ComponentDidMount')
    // }, [])
    //
    // useEffect(() => {
    //     console.log('value---->', value)
    // }, [value])
    //
    // useEffect(() => {
    //     console.log('count---->', count)
    // }, [count])

    // const incrementHandler = () => {
    //     setCount(prev => prev + 1);
    // }
    //
    // const inputHandler = event => {
    //     setValue(event.target.value)
    // }


    return(
        <>
            UseEffect
            <h2>Current position is: X: {pos.x}, Y: {pos.y}</h2>
            {/*<h2>Counter: {count}</h2>*/}
            {/*<button onClick={incrementHandler}>Increment</button>*/}
            {/*<h2>Input value: {value}</h2>*/}
            {/*<input type="text" value={value} onChange={inputHandler}/>*/}
        </>
    )
}

export default UseEffect;
