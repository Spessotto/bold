const express = require('express');
const app = express();
require('dotenv').config({});
app.use(express.json());

//Rotas
require("./routes/cartRoutes")(app);

const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => {
    console.log(`Cart API started in: http://localhost:${SERVER_PORT}`);
});
