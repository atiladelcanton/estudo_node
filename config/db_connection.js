var mysql = require('mysql');
/**
 * Essa variavel foi criada, como um wrapper para eviar que sejá feita uma nova coneção
 * com o banco de dados sempre que o servidor for acessado.
 * Somente onde chamar o modulo db_connection()
 */
var conMysql = function(){
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_user,
        password: process.env.DB_pass,
        database: process.env.DB_DATABASE
    });
}

module.exports = function(){

    return conMysql;
}
