import React, {useEffect, useRef, useState} from "react";

const UseRef = () => {
    const [value, setValue] = useState('placeholder');
    const renderCount = useRef(1);
    const inputRef = useRef(null);

    useEffect(() => {
        renderCount.current++;
    });

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const focus = () => inputRef.current.focus();

    return (
        <div>
            <h1>Render count: {renderCount.current}</h1>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button className="btn btn-success" onClick={focus}>Focus</button>
        </div>
    );
}

export default UseRef;
