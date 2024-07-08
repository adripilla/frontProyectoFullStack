import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Ajusta esta URL según sea necesario
});

export default axiosInstance;
