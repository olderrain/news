var express = require('express');
var ProductRouter = express.Router();
var ProductController = require('../../controllers/web/ProductController')

ProductRouter.get('/webapi/product/list',ProductController.getList)


module.exports=ProductRouter