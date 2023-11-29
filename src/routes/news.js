const express = require('express');
const Router = express.Router();
const newController = require("../app/controllers/NewsController")

Router.get('/', newController.index)


module.exports = Router;