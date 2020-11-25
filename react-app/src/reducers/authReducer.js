import {
    GET_CURRENT_FAILURE,
    GET_CURRENT_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_SUCCESS, LOGOUT_FAILURE,
    LOGOUT_SUCCESS,
    REGISTRATION_FAILURE,
    REGISTRATION_SUCCESS
} from "../types/authTypes";

const initialProps = {
    user: {
        name: null,
        email: null
    },
    error: null
}

export const authReducer = (state = initialProps, action) => {
    switch (action.type) {
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                user: {...action.payload}
            }
        case REGISTRATION_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: {...action.payload}
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: initialProps.user
            }
        case LOGOUT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case GET_CURRENT_SUCCESS:
            return {
                ...state,
                user: {...action.payload}
            }
        case GET_CURRENT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
