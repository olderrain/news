var express = require('express');
var NewsRouter = express.Router();
var NewsController = require('../../controllers/admin/NewsController')
const multer = require('multer')
const upload = multer({ dest: 'public/newsuploads/' })

NewsRouter.post('/adminapi/news/add',upload.single('file'),NewsController.add)
NewsRouter.get('/adminapi/news/list',NewsController.getList)
NewsRouter.get('/adminapi/news/list/:id',NewsController.getList)
NewsRouter.post('/adminapi/news/list',upload.single('file'),NewsController.updateList)
NewsRouter.delete('/adminapi/news/list/:id',NewsController.delList)
NewsRouter.put('/adminapi/news/publish',NewsController.publish)


module.exports=NewsRouter