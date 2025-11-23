import axios from 'axios';

// Central API helper. Uses REACT_APP_API_URL from .env with a safe fallback.
export const apiUrl = process.env.REACT_APP_API_URL;

// Preconfigured axios instance with baseURL set to apiUrl.
// Import `api` in components and call api.get/post/... instead of axios.
export const api = axios.create({
  baseURL: apiUrl,
  // You can add default headers here, e.g. Authorization if needed later
});

export default api;
