import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fdfe22e990ad4f388879fcfd634ee5c6',
    },
});
