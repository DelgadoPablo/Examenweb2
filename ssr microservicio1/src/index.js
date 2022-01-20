const express= require('express');
const morgan = require('morgan');
const path = require ('path');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const engine = require('ejs-mate');

const {MONGO_URI, PORT}= require('./config');

//CONEXION BASE DE DATOS 
mongoose.connect (MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false});

app.set('port', PORT);

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(cors());

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(express.json());

//middleware para variables globales

app.use(express.static(path.join(__dirname,'public')));

//importar rutas
const {PedidoRoute}= require('./routes');

app.use('/api/pedidos',PedidoRoute);

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});