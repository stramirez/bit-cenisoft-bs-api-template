const express = require('express')
const router = express.Router()
const { createVenta, getVenta, getVentas} = require('./actions')

// GET all
router.get('/', getVentas)

// GET by ID
router.get('/:id', getVenta)

// POST Create a Venta
router.post('/', createVenta)

//No se debería permitir actualizar o eliminar una venta, por lo tanto no se implementa esos métodos

module.exports = router
