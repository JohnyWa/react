import {
    GET_CURRENT_FAILURE,
    GET_CURRENT_START, GET_CURRENT_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    REGISTRATION_FAILURE,
    REGISTRATION_START,
    REGISTRATION_SUCCESS
} from "../types/authTypes";

export const registrationStart = () => ({
    type: REGISTRATION_START
})
export const registrationSuccess = data => ({
    type: REGISTRATION_SUCCESS,
    payload: data
})
export const registrationFailure = error => ({
    type: REGISTRATION_FAILURE,
    payload: error
})

export const loginStart = () => ({
    type: LOGIN_START
})
export const loginSuccess = data => ({
    type: LOGIN_SUCCESS,
    payload: data
})
export const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: error
})

export const logoutStart = () => ({
    type: LOGOUT_START
})
export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
})
export const logoutFailure = error => ({
    type: LOGOUT_FAILURE,
    payload: error
})

export const getCurrentStart = () => ({
    type: GET_CURRENT_START
})
export const getCurrentSuccess = data => ({
    type: GET_CURRENT_SUCCESS,
    payload: data
})
export const getCurrentFailure = error => ({
    type: GET_CURRENT_FAILURE,
    payload: error
})

