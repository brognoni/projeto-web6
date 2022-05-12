let mysql = require('mysql');
let connectionMySql = function () {
    console.log('Iniciada a conexão com o banco de dados!');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'rootmarciABo@3A',
        database: 'website'
    })
};

module.exports = function() {
    return connectionMySql;
}
