const mongoose = require("mongoose");
const {Schema} = mongoose;


const VentaSchema = new Schema({
    detalle_productos:{type:String},
    descripcion_pedido:{type:String},
    producto_solicitado:{type:String},
    num_pedido:{type:Number},
    fecha_pedido:{type:Date},
    hora_pedido:{type:String},
    total:{type:Number},
    comision:{type:String},
    fecha_entrega:{type:Date}
});

module.exports = mongoose.model('Venta',VentaSchema);