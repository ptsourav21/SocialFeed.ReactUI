import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://socialfeedapi-ftbhaagrcrbyczac.canadacentral-01.azurewebsites.net', 
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosClient;