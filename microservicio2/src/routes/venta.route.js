const {Router}= require('express');
const router = Router();
const {VentaController}= require('../controllers');

router.get('/', VentaController.getAll);

router.post('/add',VentaController.add);

router.put('/update/:venta_id',VentaController.update);

router.delete('/delete/:venta_id',VentaController.delete);

router.get('/:venta_id',VentaController.getOne);


module.exports= router