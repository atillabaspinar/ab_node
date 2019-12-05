const express = require('express');

const ContentController = require('../controllers/content');
const router = express.Router();

router.get('/article', ContentController.getArticle);
router.get('/category', ContentController.getCategory);

module.exports = router;