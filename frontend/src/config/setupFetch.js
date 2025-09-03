// src/config/setupFetch.js
import { API_URL } from './api';

// Save original fetch
const originalFetch = window.fetch;

// Override fetch globally
window.fetch = (url, options) => {
  // Prepend API_URL if URL starts with /
  if (url.startsWith('/')) {
    url = `${API_URL}${url}`;
  }
  return originalFetch(url, options);
};
