const express = require('express');
const Router = express.Router();
const siteController = require("../app/controllers/SiteController")

Router.get('/:slug', siteController.search)
Router.get('/', siteController.index)


module.exports = Router;