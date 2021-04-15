const express = require('express');
const app = express();
const jwtUtil = require("./utils/jwt");
require('dotenv').config({});

//Middlewares
//app.use(cors())
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,Authorization');
    next();
});

//Interceptor
app.use(function (req, res, next) {
    const jwt = new jwtUtil();

    //Verify if authorization token exists
    if (req.path.indexOf("/products") != -1 || req.path.indexOf("/cart") != -1) {

        if (!req.headers.authorization) {
            console.log("Error: Authorization token not found.");
            res.status(401).json("Error: Authorization token not found.");
        }
        else {

            let tokenJWT = req.headers.authorization;
            if (tokenJWT.startsWith("Bearer ")) {
                tokenJWT = tokenJWT.substring(7, tokenJWT.length);
            }

            let autorizado = jwt.verificaJWT(tokenJWT);
            if (autorizado)
                next();
            else {
                res.status(401).json("Error: Invalid Authorization token.");
            }
        }
    }
    else {
        next();
    }

});

//Rotas
require("./routes/productRoutes")(app);
require("./routes/cartRoutes")(app);
require("./routes/authRoutes")(app);
require("./routes/swaggerRoutes")(app);

const SERVER_PORT = process.env.SERVER_PORT || 8080;
app.listen(SERVER_PORT, () => {
    console.log(`API started! Swagger in: http://localhost:${SERVER_PORT}`);
});