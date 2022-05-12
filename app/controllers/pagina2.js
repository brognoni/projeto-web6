const { getObrasDeArteTarsila } = require('../models/pagina2.js');

module.exports.pagina2Listar = function (app, req, res) {
    let connection = app.config.dbServer();
    getObrasDeArteTarsila(connection, function (error, result) {
        if (error) {
            res.send("Problemas com a conexão!!!");
        } else {
            console.log(result);
            res.render('pagina2.ejs', { obrasdearte: result });
        }
    });
}

