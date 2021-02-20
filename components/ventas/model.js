const mongoose = require('mongoose')
const Book = require('../book/model')
const Client = require('../client/model')

const detalleSchema = new mongoose.Schema({
  idLibro: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Book
    },
  cantidad: { type: Number, required: true }
})

const ventaSchema = new mongoose.Schema({
  fecha: { type: Date, default: Date.now },
  total: { type: Number, required: true },
  idCliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Client
  },
  detalle: [detalleSchema],
}, {
  timestamps: true
})

const Venta = mongoose.model('ventas', ventaSchema)

module.exports = Venta
