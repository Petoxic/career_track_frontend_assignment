import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return error;
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    return error;
  }
);

const api = {
  get: (url: string, params = {}, headers = {}) =>
    axios.get(url, { params, headers }),
  post: (url: string, params = {}, headers = {}) =>
    axios.post(url, params, headers),
};

export default api;
