import React, { useMemo, useState} from "react";

function complexCompute(num) {
    let i = 0;
    while(i < 999999999) i++;

    return num;
}

const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [colored, setColored] = useState(false);

    const computed = useMemo(() => {
        console.log('computed---->');
        return complexCompute(number);
    }, [number])

    const styles = useMemo(() => {
        console.log('styles---->');
        return {
            color: colored ? 'darkred' : 'black'
        }
    }, [colored]);

    return (
        <div>
            <h1 style={styles}>Computed property: {computed}</h1>
            <button
                className="btn btn-success"
                onClick={() => setNumber(prev => prev + 1)}
            >
                Add
            </button>
            <button
                className="btn btn-danger"
                onClick={() => setNumber(prev => prev - 1)}
            >
                Minus
            </button>
            <button
                className="btn btn-warning"
                onClick={() => setColored(prev => !prev)}
            >
                Change
            </button>
        </div>
    )
}

export default UseMemo;
