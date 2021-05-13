import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  headers: {
    'Accept': 'application/json'
  }
});

export default API;