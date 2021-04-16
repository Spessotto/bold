const customException = require("../utils/customException");
const mongoose = require('mongoose');

class bdConnection {

    async connect() {
        return new Promise(function (resolve, reject) {

            const MONGO_URI = `${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_URI}`;
            const MONGO_USER = process.env.MONGO_USER;
            const MONGO_PASS = process.env.MONGO_PASS;
            const conn_uri = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_URI}`;

            mongoose.Promise = global.Promise;
            mongoose.connect(conn_uri, { poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true, appname: "product-api" });
            
            let db = mongoose.connection;
            db.on('error', function () {
                reject(new customException('Not connected to Database! Host: ' + conn_uri));
            });

            db.on('connected', function () {
                console.log(`Database connection stablished!`);
                resolve(mongoose);
            });

            process.on('SIGINT', function () {
                mongoose.connection.close(function () {
                    process.exit(0);
                });
            });

        });
    }

    async disconnect() {
        console.log("Conexão com o BD fechada!");
        mongoose.disconnect();
    }

}

module.exports = bdConnection;