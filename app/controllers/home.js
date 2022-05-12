// const dbConnection = require('../../config/dbServer');
const { getObrasDeArte } = require('../models/home');
const logger = require('../../config/logger');
module.exports.homeListar = function (app, req, res) {
    let connection = app.config.dbServer();
    getObrasDeArte(connection, function (error, result) {
        if (error) {
            logger.log({
                level: 'error',
                message: error.message
            });
            res.send("Problemas com a conexão!!!");
        } else {
            console.log(result);
            res.render('home.ejs', { obrasdearte: result });
        }
    });
}

