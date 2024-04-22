const express = require('express');
const {addBook,getBooks,removeBook,updateBook} = require("../controllers/bookController")
const router = express.Router();

router.get('/',getBooks);
router.post('/',addBook);
router.delete('/:id',removeBook);
router.put('/:id',updateBook);

module.exports= router;