import React from "react";
import MainTodoComponent from "../components/MainTodoComponent";
import { useHistory, useLocation, useParams } from "react-router-dom";

//https://reactrouter.com/web/api/Hooks
const Home = () => {
    const history = useHistory();
    const location = useLocation();
    const params = useParams();

    console.log('params---->', params);

    function handleClick() {
        history.push("/useCallback");
    }

    return (
        <>
            <h1>Home page!</h1>
            <MainTodoComponent/>
            <button type="button" onClick={handleClick}>
                Go UseCallback
            </button>
        </>
    )
}

export default Home;
