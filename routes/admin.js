const express = require('express');

const AdminController = require('../controllers/admin');
const router = express.Router();

router.get('/add-article', AdminController.getAddArticle);

router.post('/add-article', AdminController.postAddArticle);


module.exports = router;