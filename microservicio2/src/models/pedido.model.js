const mongoose = require("mongoose");
const {Schema} = mongoose;


const pedidoSchema = new Schema({
    detalle_productos:{type:String},
    descripcion_pedido:{type:String},
    producto_solicitado:{type:String},
    num_pedido:{type:Number},
    fecha_pedido:{type:Date},
    hora_pedido:{type:String},
    total:{type:Number},
    estado:{type:String}
    
});

module.exports = mongoose.model('Pedido',pedidoSchema);