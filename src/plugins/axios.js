import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,

  headers: {
    "Content-type": "application/json",
    // "Authorization": "Bearer " + localStorage.getItem(LocalStorageKeys.token) || ""
  }
});

export default api