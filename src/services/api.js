import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.covid19api.com"
});

export default api;