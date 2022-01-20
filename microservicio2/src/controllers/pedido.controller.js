const { PedidoModel } = require('../models');
const moment = require('moment');

class PedidoController{
    async getByDate(req, res){
        try{
            const datei = req.body.datei;
            const datef = req.body.datef;
            const pedidos = await PedidoModel.find({fecha_pedido: { $gte: datei, 
                                                    $lt: datef },estado:'pendiente'})
            res.json(pedidos)
        }catch(error){
            res.json({error:true})
        }
    }
}

module.exports = new PedidoController();