const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


const server = express();

// const whiteList = ['http://localhost:3000'];
// const corsOptions = {
//     origin: (origin, callback) =>{
//         const existe = whiteList.some(dominio => dominio === origin);
//         if(existe){
//             callback(null, true);
//         }else{
//             callback(new Error('Acceso denegado por CORS'));
//         }
//     }
// }

// server.use(cors(corsOptions));
server.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pizzas',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use('/', routes());

server.listen(4000, ()=>{
    console.log('Servidor funcionando');
})