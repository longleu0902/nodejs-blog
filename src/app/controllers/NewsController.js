class NewsController{
    //[gET]/news
    index(req, res)  {
        res.render('news');

    }

    //[GET] / news/:slug
    show(req, res){
        res.send('newsdaltel');


    }
}
module.exports = new NewsController ;