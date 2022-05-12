const { getWebSite } = require('../models/pagina1.js');

module.exports.pagina1Listar = function (app, req, res) {
    let connection = app.config.dbServer();
    getWebSite(connection, function (error, result) {
        if (error) {
            res.send("Problemas com a conexão!!!");
        } else {
            console.log(result);
            res.render('pagina1.ejs', { resenha: result });
        }
    });
}

