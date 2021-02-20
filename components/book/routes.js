const express = require('express')
const router = express.Router()
const { createBook, deleteBook, getBook, getBooks, updateBook } = require('./actions')

// GET all
router.get('/', getBooks)

// GET by ID
router.get('/:id', getBook)

// POST Create a Book
router.post('/', createBook)

// PUT Update a Book's info
router.put('/', updateBook)

// DELETE by ID
router.delete('/:id', deleteBook)

module.exports = router
