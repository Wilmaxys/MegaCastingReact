import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.megacasting.local:80'
});

export default instance;