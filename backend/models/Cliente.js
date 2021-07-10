const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientesSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    pedido:{
        type: String,
        trim: true
    },
    fecha:{
        type: String, 
        trim: true
    },
    hora:{
        type: String,
        trim: true
    },
});

module.exports = mongoose.model('Clientes', clientesSchema);