import axios from 'axios';

export const axiosBase = axios.create({
  baseURL: 'https://kitsu.io/api/edge',
  headers: {
    'Content-type': 'application/json'
  }
});
