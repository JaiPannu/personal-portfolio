import axios from 'axios';

// Base URL for your backend API
// Update this to match your backend URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API service object with all endpoints
const apiService = {
  // ========== PROJECTS ==========
  projects: {
    // Get all projects
    getAll: () => api.get('/projects'),

    // Get single project by ID
    getById: (id) => api.get(`/projects/${id}`),

    // Create new project
    create: (projectData) => api.post('/projects', projectData),

    // Update project
    update: (id, projectData) => api.put(`/projects/${id}`, projectData),

    // Delete project
    delete: (id) => api.delete(`/projects/${id}`),
  },

  // ========== SKILLS ==========
  skills: {
    // Get all skills
    getAll: () => api.get('/skills'),

    // Get skills by category
    getByCategory: (category) => api.get(`/skills/category/${category}`),

    // Create new skill
    create: (skillData) => api.post('/skills', skillData),

    // Update skill
    update: (id, skillData) => api.put(`/skills/${id}`, skillData),

    // Delete skill
    delete: (id) => api.delete(`/skills/${id}`),
  },

  // ========== CONTACT ==========
  contact: {
    // Get all messages (admin)
    getAll: () => api.get('/contact'),

    // Submit contact form
    submit: (contactData) => api.post('/contact', contactData),

    // Mark message as read (admin)
    markAsRead: (id) => api.put(`/contact/${id}/read`),

    // Delete message (admin)
    delete: (id) => api.delete(`/contact/${id}`),
  },
};

export default apiService;
