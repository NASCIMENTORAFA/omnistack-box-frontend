import axios from 'axios';

const api = axios.create({
    baseURL: "https://omnistack-backend-box.herokuapp.com",
});

export default api;