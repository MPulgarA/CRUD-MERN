const Cliente = require('../models/Cliente');

exports.nuevoCliente = async (req, res, next) =>{
    const cliente = new Cliente(req.body);

    try {
        await cliente.save();
        res.json({mensaje: 'El cliente y su pedido se han agregado correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }

}

exports.obtenerClientes = async(req, res, next)=>{
    try {
        const clientes = await Cliente.find({});
        res.json(clientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerCliente = async (req, res, next) =>{
    try {
        const cliente = await Cliente.findById(req.params.id);
        res.json(cliente);
    } catch (error) {
        console.log();
        next();
    }
}

exports.actualizarCliente = async(req, res, next) =>{
    try {
        const cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });

        res.json(cliente);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarCliente = async (req, res, next) =>{
    try {
        await Cliente.findByIdAndDelete({_id: req.params.id});
        res.json({mensaje: 'El cliente y su pedido fueron eliminados'});
    } catch (error) {
        console.log(error);
        next();
    }
}