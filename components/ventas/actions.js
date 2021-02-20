const Venta = require('./model')

const createVenta = (req, res) => {
  const newVenta = new Venta(req.body)
  newVenta.save((error, ventaSaved) => {
    if (error) {
      console.error('Error saving venta ', error)
      res.status(500).send(error)
    } else {
      res.send(ventaSaved)
    }
  })
}

const getVenta = (req, res) => {
  Venta.findById(req.params.id, (error, Venta) => {
    if (error) {
      res.status(500).send(error)
    } else if (Venta) {
      res.send(Venta)
    } else {
      res.status(404).send({})
    }
  })
}

const getVentas = (req, res) => {
  let query = req.query
  if (req.query.name) {
    query = { name: new RegExp(`.*${req.query.name}.*`, 'i') }
  }

  Venta.find(query, (error, Ventas) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.send(Ventas)
    }
  })
}

module.exports = { createVenta, getVenta, getVentas}
