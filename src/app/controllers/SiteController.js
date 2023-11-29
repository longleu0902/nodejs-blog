
const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../../util/mongoose')

class SiteController{
    //[gET]/
    async  index(req, res , next)  {
        // res.render('home');
        try{
            const courses = await Course.find({});
            res.render('home', { 
                courses : mutipleMongooseToObject(courses)
            } )

        }catch(err){
            // res.status(400).json({ error: 'ERROR!!!' });
            next(err);
        }


    }

    //[GET] /search
    search(req, res){
        res.send('search');


    }
}
module.exports = new SiteController ;