import axios from 'axios';

const Api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    // baseURL: "http://192.168.43.15:8000/api",
    headers: {
      'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    }
  });

export default Api;
