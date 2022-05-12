const { getObrasDeArteTarsila } = require('../models/pagina4.js');

module.exports.pagina4Listar = function (app, req, res) {
    let connection = app.config.dbServer();
    getObrasDeArteTarsila(connection, function (error, result) {
        if (error) {
            res.send("Problemas com a conexão!!!");
        } else {
            console.log(result);
            res.render('pagina4.ejs', { obrasdearte: result });
        }
    });
}

