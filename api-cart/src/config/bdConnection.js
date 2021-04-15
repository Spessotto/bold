const CustomException = require("../utils/customException");
const Sequelize = require("sequelize");

class bdConnection {

    async connect() {
        return new Promise(function (resolve, reject) {

            let configSQL = {
                dialect: 'postgres',
                logging: false,
                port: process.env.DATABASE_PORT,
                username: process.env.DATABASE_USER,
                host: process.env.DATABASE_HOST,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE,
                define: {
                    timestamps: false,
                    underscored: false
                }
            };

            //Connection Info  
            let sequelize = new Sequelize(configSQL);

            //Verify connection
            sequelize
                .authenticate()
                .then(function (err) {
                    console.log('Connection successfull.');
                    resolve(sequelize);

                })
                .catch(function (err) {
                    console.log('Error connecting to Database:', err);
                    reject(new CustomException('Error connecting to Database:' + err, 404));
                });
        });

    }
}

module.exports = bdConnection;