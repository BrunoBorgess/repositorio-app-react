import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com", // Utilizando axios para criar uma instância com a URL base da API
});

export default api; 