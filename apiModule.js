import axios from 'axios';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

var API_HOST = {
  production: 'https://nod-be.herokuapp.com',
  staging: 'https://nod-be-stag.herokuapp.com',
  development: 'https://nod-be-dev.herokuapp.com',
  dev_local: 'http://localhost:3000',
  heroku_review: '',
  other: '',
};

const target = (process.env.NODE_ENV === '' || process.env.NODE_ENV === undefined) ? 'other' : process.env.NODE_ENV;

const baseUrl = API_HOST[target] + '/api';


const $axios = axios.create({
  headers,
  baseUrl,
  withCredentials: false,
});

export default $axios;
