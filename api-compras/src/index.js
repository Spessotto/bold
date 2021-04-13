const express = require('express');
const app = express();
//const BD = new (require("./config/bdConnection"));
require('dotenv').config({});

app.use(express.json());

//Rotas
require("./routes/carrinhoRoutes")(app);

//BD.connect()
//    .then(function () {
        const SERVER_PORT = process.env.SERVER_PORT;
        app.listen(SERVER_PORT, () => {
            console.log(`API de Produtos iniciado em: http://localhost:${SERVER_PORT}`);
        });
//    })