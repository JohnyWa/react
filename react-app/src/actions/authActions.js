import {REGISTRATION_FAILURE, REGISTRATION_START, REGISTRATION_SUCCESS} from "../types/authTypes";

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
