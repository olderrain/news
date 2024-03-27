var express = require('express');
var UserRouter = express.Router();
var UserController = require('../../controllers/admin/UserController')
const multer = require('multer')
const upload = multer({ dest: 'public/avataruploads/' })
/* GET home page. */
UserRouter.post('/adminapi/user/login', UserController.login);
UserRouter.post('/adminapi/user/upload', upload.single('file'), UserController.upload);
UserRouter.post('/adminapi/user/add', upload.single('file'), UserController.add);
UserRouter.get('/adminapi/user/list', UserController.getList);
UserRouter.get('/adminapi/user/list/:id', UserController.getList);
UserRouter.put('/adminapi/user/list/:id', UserController.putList);
UserRouter.delete('/adminapi/user/list/:id', UserController.delList);

module.exports = UserRouter;