const express = require("express");
const routes = express.Router();
const middleware = require('./config/middleware');

const AuthController = require('./controllers/AuthController');
const DomainController = require('./controllers/DomainController');

// AUTH
routes.post("/auth/token", AuthController.createToken);

// CRON
routes.get("/cron/domain/get-all", middleware.checkToken, DomainController.cronGetAllDomains);

module.exports = routes;