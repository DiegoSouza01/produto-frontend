import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const productService = {
  createProduct: (product) => api.post("/products", product),
  getAllProducts: () => api.get("/products"),
  getProductById: (id) => api.get(`/products/${id}`),
  updateProduct: (id, product) => api.put(`/products/${id}`, product),
  deleteProduct: (id) => api.delete(`/products/${id}`),
};

export default api;
