import axios from 'axios';

const api = axios.create({ baseURL: 'https://gftcasadeshow.herokuapp.com'});

export default api;