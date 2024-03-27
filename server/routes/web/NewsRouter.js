var express = require('express');
var NewsRouter = express.Router();
var NewsController = require('../../controllers/web/NewsController')

NewsRouter.get('/webapi/news/list',NewsController.getList)
NewsRouter.get('/webapi/news/list/:id',NewsController.getList)
NewsRouter.get('/webapi/news/toplist',NewsController.getTopList)


module.exports=NewsRouter