import React from "react";
import {useAlert} from "../components/Alert/AlertContext";
import Alert from "../components/Alert/Alert";

const UseContext = () => {
    const { show } = useAlert();

    const clickHandler = () => {
        show('SOME TEXT!!!!')
    }
    return (
        <>
            <h1>Hi Context</h1>
            <Alert />
            <button onClick={clickHandler} className="btn btn-success">Show Alert!</button>
        </>
    );
}

export default UseContext;
