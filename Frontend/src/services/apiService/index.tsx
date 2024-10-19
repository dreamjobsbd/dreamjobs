
// import axios from "axios";

// export const api = axios.create({
//     baseURL : "https://flexywork-backend.onrender.com",
//     withCredentials : true,
// })

import axios from 'axios';

export const api = axios.create({
  baseURL: "https://flexywork-backend.onrender.com",
  withCredentials: true, // This is crucial for cookie handling
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add request interceptor to handle token
api.interceptors.request.use(
  (config) => {
    // You might want to add any default headers here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized error
      // You might want to dispatch resetAuth() here
    }
    return Promise.reject(error);
  }
);