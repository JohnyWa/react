import { createReducer } from '@reduxjs/toolkit';
import {addCount} from "../actions/counterAction";

const initialProps = {
    count: 0
}


export const countReducer = createReducer(initialProps, {
    [addCount.type]: (state, action) => ({
        count: initialProps.count++
    })
})
