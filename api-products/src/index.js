const express = require('express');
const app = express();
const BD = new (require("./config/bdConnection"));
require('dotenv').config({});

//Middleware
app.use(express.json());

//Routes
require("./routes/productRoutes")(app);

BD.connect()
.then( function () {
    const SERVER_PORT = process.env.SERVER_PORT;
    app.listen(SERVER_PORT, () => {
        console.log(`Product API started in : http://localhost:${SERVER_PORT}`);
    });
})

