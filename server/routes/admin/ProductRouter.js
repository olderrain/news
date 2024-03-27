var express = require('express');
var ProductRouter = express.Router();
var ProductController = require('../../controllers/admin/ProductController')
const multer = require('multer')
const upload = multer({ dest: 'public/productuploads/' })

ProductRouter.post('/adminapi/product/add',upload.single('file'),ProductController.add)
ProductRouter.get('/adminapi/product/list',ProductController.getList)
ProductRouter.get('/adminapi/product/list/:id',ProductController.getList)
ProductRouter.post('/adminapi/product/list',upload.single('file'),ProductController.updateList)
ProductRouter.delete('/adminapi/product/list/:id',ProductController.delList)
// ProductRouter.put('/adminapi/news/publish',NewsController.publish)


module.exports=ProductRouter