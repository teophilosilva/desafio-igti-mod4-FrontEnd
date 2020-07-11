import axios from 'axios';

//Define a URL base da origem para consumo do servico
const api = axios.create({
  baseURL: 'http://localhost:8081/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
