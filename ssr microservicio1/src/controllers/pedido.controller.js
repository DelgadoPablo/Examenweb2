const { PedidoModel } = require('../models');

class PedidoController{

    async getAll(req, res){
        try {
            const pedidos = await PedidoModel.find()
            res.render('pedidos',{data:pedidos})
        } catch (error) {
            res.json(error)
        }
    }

    async add(req, res){
        console.log("hola")
        try{
            const pedido=new PedidoModel(req.body)
            await pedido.save()
            res.redirect('/api/pedidos')
        } catch(error){
            res.json(error)
        }
    }

    async update(req, res){
        try{
            const {body}= req;
            const {pedido_id} = req.params;
            await PedidoModel.findByIdAndUpdate(pedido_id, body);
            res.redirect('/api/pedidos')
        } catch(error){
            res.json(error)
        }
    }

    async delete(req, res){
        try {
            const {pedido_id} = req.params;
            await PedidoModel.deleteMany({_id: pedido_id});
            res.redirect('/api/pedidos')
        } catch (error) {
            res.json(error);
        }
    }

    async getOne(req, res){
        try{
            const {pedido_id} = req.params;
            const pedido = await PedidoModel.findById(pedido_id);
            res.render('editar',{data:pedido})
        }catch(error){
            res.json(error);
        }
        
    }

    agregar(req, res){
        try {
            res.render('agregar');
        } catch (error) {
            res.json(error);
        }
    }


}

module.exports = new PedidoController();