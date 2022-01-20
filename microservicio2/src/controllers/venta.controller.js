const { VentaModel } = require('../models');

class VentaController{

    async getAll(req, res){
        try {
            const ventas = await VentaModel.find()
            res.json(ventas)
        } catch (error) {
            res.json(error)
        }
    }

    async add(req, res){
        console.log("hola")
        try{
            const venta =new VentaModel(req.body)
            await venta.save()
            res.json({error:false})
        } catch(error){
            res.json({error:true})
        }
    }

    async update(req, res){
        try{
            const {body}= req;
            const {venta_id} = req.params;
            await VentaModel.findByIdAndUpdate(venta_id, body);
            res.json({error:false})
        } catch(error){
            res.json({error:true})
        }
    }

    async delete(req, res){
        try {
            const {venta_id} = req.params;
            await VentaModel.deleteMany({_id: venta_id});
            res.json({error:false})
        } catch (error) {
            res.json({error:true})
        }
    }

    async getOne(req, res){
        try{
            const {venta_id} = req.params;
            const venta = await VentaModel.findById(venta_id);
            res.json(venta)
        }catch(error){
            res.json({error:true})
        }
        
    }

}

module.exports = new VentaController();