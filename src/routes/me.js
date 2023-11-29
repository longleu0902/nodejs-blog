const express = require('express');
const Router = express.Router();
const meController = require("../app/controllers/MeController")

Router.get('/stored/courses', meController.storedCourses)



module.exports = Router;