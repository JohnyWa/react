import axios from 'axios';
import {
    getCurrentFailure,
    getCurrentStart, getCurrentSuccess,
    loginFailure,
    loginStart, loginSuccess, logoutFailure, logoutStart, logoutSuccess,
    registrationFailure,
    registrationStart,
    registrationSuccess
} from "../actions/authActions";

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const setToken = token => {
    sessionStorage.setItem('token', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearToken = () => {
    sessionStorage.removeItem('token');
    axios.defaults.headers.common.Authorization = '';
}

export const registration = userData => dispatch => {
    dispatch(registrationStart())

    axios.post('/users/signup', userData)
        .then(response => {
            setToken(response.data.token)
            dispatch(registrationSuccess(response.data.user))
        })
        .catch(error => dispatch(registrationFailure(error)))
}

export const login = userData => dispatch => {
    dispatch(loginStart())

    axios.post('/users/login', userData)
        .then(response => {
            setToken(response.data.token)
            dispatch(loginSuccess(response.data.user))
        })
        .catch(error => dispatch(loginFailure(error)))
}

export const logout = () => dispatch => {
    dispatch(logoutStart())

    axios.post('/users/logout')
        .then(() => {
            clearToken();
            dispatch(logoutSuccess())
        })
        .catch(error => dispatch(logoutFailure(error)))
}

export const currentUser = () => dispatch => {
    dispatch(getCurrentStart())

    const token = sessionStorage.getItem('token')

    if(!token) {
        return;
    }
    setToken(token)

    axios.get('/users/current')
        .then(response => {
            dispatch(getCurrentSuccess(response.data))
        })
        .catch(error => dispatch(getCurrentFailure(error)))
}
