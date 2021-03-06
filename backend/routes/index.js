const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController')

module.exports = function (){

    router.post('/clientes', clienteController.nuevoCliente);

    router.get('/clientes', clienteController.obtenerClientes);

    router.get('/clientes/:id', clienteController.obtenerCliente);

    router.put('/clientes/:id', clienteController.actualizarCliente);

    router.delete('/clientes/:id', clienteController.eliminarCliente);
    
    return router;
}

