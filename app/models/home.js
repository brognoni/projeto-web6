module.exports = {
    getObrasDeArte: function (connection, callback) {
        let querysql = 'select * from resenha';
        connection.query(querysql, callback);
    }
}