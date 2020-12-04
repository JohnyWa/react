import React, {useEffect, useState} from "react";

const CounterComponent = ({doubleNumber}) => {
    const [count, setCounter] = useState(0);

    useEffect(() => {
        const currNumber = doubleNumber();
        console.log('CounterComponent render!')
        setCounter(currNumber)
    }, [doubleNumber])

    return (
        <h2>Double counter: {count}</h2>
    )
}

export default CounterComponent;
