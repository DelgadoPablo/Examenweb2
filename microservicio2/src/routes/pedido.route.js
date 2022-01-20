const {Router}= require('express');
const router = Router();
const {PedidoController}= require('../controllers');

router.post('/getbydate', PedidoController.getByDate);

module.exports= router