import axios from 'axios';

const api = axios.create({ baseURL: 'https://gftcasadeshow.herokuapp.com/swagger-ui.html'});

export default api;