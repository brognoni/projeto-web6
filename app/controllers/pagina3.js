const { getObrasDeArteTarsila } = require('../models/pagina3.js');

module.exports.pagina3Listar = function (app, req, res) {
    let connection = app.config.dbServer();
    getObrasDeArteTarsila(connection, function (error, result) {
        if (error) {
            res.send("Problemas com a conexão!!!");
        } else {
            console.log(result);
            res.render('pagina3.ejs', { obrasdearte: result });
        }
    });
}

