const express = require('express')
const apiController = require('../controllers/apiController.js')

const router = express.Router()

module.exports = router
  .get('/article', apiController.getArticles)
  .post('/article', apiController.postArticle)
  .put('/article', apiController.delArticle)
