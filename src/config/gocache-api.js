const axios = require('axios').default;
require('dotenv/config');

const gocache = axios.create({
    baseURL: process.env.NODEMON_GOCACHE_API
});

gocache.interceptors.request.use(async config => {
    config.headers = {
        "GoCache-Token": process.env.NODEMON_GOCACHE_TOKEN
    }
    return config;
});

module.exports = gocache;