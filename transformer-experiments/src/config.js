// Base URL for the backend API.
// Set VITE_API_BASE at build time (e.g. the Cloud Run URL) for production;
// falls back to the local dev server otherwise.
export const API_BASE = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:8000';
