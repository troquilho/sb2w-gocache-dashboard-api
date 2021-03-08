const axios = require('axios').default;
require('dotenv/config');

const api = axios.create({
    baseURL: process.env.NODEMON_API || 'http://localhost:3000/'
});

api.interceptors.request.use(async config => {
    config.headers = {}
    return config;
});

module.exports = api;