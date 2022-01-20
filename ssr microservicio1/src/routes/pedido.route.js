const {Router}= require('express');
const router = Router();
const {PedidoController}= require('../controllers');

router.get('/', PedidoController.getAll);

router.post('/add',PedidoController.add);

router.post('/update/:pedido_id',PedidoController.update);

router.get('/delete/:pedido_id',PedidoController.delete);

router.get('/editar/:pedido_id',PedidoController.getOne);

router.get('/agregar',PedidoController.agregar);


module.exports= router