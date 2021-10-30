import axios from 'axios';

const baseURL = 'https://pim-backend.herokuapp.com';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
