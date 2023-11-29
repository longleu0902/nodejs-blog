const express = require('express');
const Router = express.Router();
const coursesController = require("../app/controllers/CourseController")

Router.get('/create', coursesController.create)
Router.post('/store', coursesController.store)
Router.get('/:slug', coursesController.show)
Router.get('/:id/edit', coursesController.edit)
Router.put('/:id', coursesController.update)




module.exports = Router;