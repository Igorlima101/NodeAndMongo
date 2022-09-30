const express = require("express")
const routes = express.Router()
const Library = require('../src/controllers/library_controller')


routes.get('/book/list', Library.bookList)
routes.post('/book/post', Library.bookCreate)
routes.delete('/book/delete/:_id', Library.delete)
routes.put('/book/update', Library.update)

module.exports = routes