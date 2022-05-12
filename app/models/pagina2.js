module.exports = {
    getWebSite: function (connection, callback) {
        let querysql = 'select * from resenha';
        connection.query(querysql, callback);
    }
}