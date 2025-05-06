// import axios from 'axios';

// // Set base URL based on environment
// // Use relative baseURL for all environments except explicit local development
// const isLocalDev = window.location.hostname === 'localhost' && window.location.port === '3000';
// const baseURL = isLocalDev ? 'http://localhost:5000' : '/';
// axios.defaults.baseURL = baseURL;

// // Add request interceptor for debugging
// axios.interceptors.request.use(request => {
//   console.log('Starting Request:', request.url);
//   return request;
// });

// // Add response interceptor for debugging
// axios.interceptors.response.use(
//   response => {
//     console.log('Response:', response);
//     return response;
//   },
//   error => {
//     console.error('Request Failed:', error.config);
//     if (error.response) {
//       console.error('Status:', error.response.status);
//       console.error('Data:', error.response.data);
//     }
//     return Promise.reject(error);
//   }
// );

// import axios from 'axios';

// // Set base URL based on environment
// const baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : '/';
// axios.defaults.baseURL = baseURL;

// // Add request interceptor for debugging
// axios.interceptors.request.use(request => {
//   console.log('Starting Request:', request.url);
//   return request;
// });

// // Add response interceptor for debugging
// axios.interceptors.response.use(
//   response => {
//     console.log('Response:', response);
//     return response;
//   },
//   error => {
//     console.error('Request Failed:', error.config);
//     if (error.response) {
//       console.error('Status:', error.response.status);
//       console.error('Data:', error.response.data);
//     }
//     return Promise.reject(error);
//   }
// );
// axiosConfig.js
import axios from 'axios';

// ✅ Always use the deployed backend URL (no localhost fallback)
const baseURL = 'https://delishapp-backend888.onrender.com';

// Set Axios base URL globally
axios.defaults.baseURL = baseURL;

// ✅ Request interceptor: log each outgoing request
axios.interceptors.request.use(request => {
  console.log('Starting Request:', request.method?.toUpperCase(), request.url);
  return request;
}, error => {
  console.error('Request Setup Error:', error);
  return Promise.reject(error);
});

// ✅ Response interceptor: log responses and errors
axios.interceptors.response.use(
  response => {
    console.log('Response:', response.status, response.config.url);
    return response;
  },
  error => {
    console.error('❌ Request Failed:', error.config?.url || 'Unknown URL');
    if (error.response) {
      console.error('Status Code:', error.response.status);
      console.error('Response Data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Axios Error:', error.message);
    }
    return Promise.reject(error);
  }
);
