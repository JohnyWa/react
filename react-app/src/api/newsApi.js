import axios from 'axios';

export const getFromApi = (searchData, page) => {
  return axios
    .get(`http://newsapi.org/v2/everything?q=${searchData}&page=${page}&pageSize=5&apiKey=b00422785a784080b5bee0d0012e0b8a`)
    .then(response => response.data)
};