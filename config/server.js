let express = require('express');
let consign = require('consign');
let app = express();
let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views','./app/views');
consign().include('./app/routes').then('config/dbServer.js').into(app);

app.listen(port, function() {
    console.log('Servidor rodando com Express na porta ', port);
});

module.exports = app;