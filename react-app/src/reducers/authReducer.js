import {REGISTRATION_FAILURE, REGISTRATION_SUCCESS} from "../types/authTypes";

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
                ...action.payload
            }
        case REGISTRATION_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
