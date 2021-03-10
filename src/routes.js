const express = require("express");
const routes = express.Router();
const middleware = require('./config/middleware');

const AuthController = require('./controllers/AuthController');
const AccountController = require('./controllers/AccountController');
const DomainController = require('./controllers/DomainController');

// AUTH
routes.post("/auth/token", AuthController.createToken);

// ACCOUNT   
routes.get("/account/get-all", middleware.checkToken, AccountController.getAll);

// DOMAIN   
routes.get("/domain/get-all", middleware.checkToken, DomainController.getAll);

// CRON
routes.post("/cron/account/save-domains", AccountController.cronSaveAllDomains);
routes.post("/cron/domain/get-all", DomainController.cronGetAndSetAllDomains);
routes.post("/cron/domain/save-info-domain", DomainController.cronGetAndSetInfoDomain);
routes.post("/cron/token/remove-expired", AuthController.cronRemoveExpiredTokens);

module.exports = routes;