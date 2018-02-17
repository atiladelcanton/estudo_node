module.exports = function(app){
    app.get('/noticias',function(req,res){
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'xubiruba',
            database: 'portal_noticias'
        });

        connection.query('select * from noticias',function(error, result){
            res.render('noticias/noticias',{noticias:result});
        });
    });
}
