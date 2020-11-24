import axios from 'axios';
import {registrationFailure, registrationStart, registrationSuccess} from "../actions/authActions";

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearToken = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const registration = userData => dispatch => {
    dispatch(registrationStart)

    axios.post('/users/signup', userData)
        .then(response => {
            setToken(response.data.token)
            dispatch(registrationSuccess(response.data.user))
        })
        .catch(error => dispatch(registrationFailure(error)))
}
