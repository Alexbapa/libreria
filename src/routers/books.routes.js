const {Router} = require('express');
const {getBooks, createBook, updateBook, deleteBook} = require('../controllers/books.controllers');
const routers = Router();

//leer
routers.get('/', getBooks);
//crear
routers.post('/', createBook);
//editar
routers.put('/:id', updateBook);
//eliminar
routers.delete('/:id', deleteBook);

module.exports = routers