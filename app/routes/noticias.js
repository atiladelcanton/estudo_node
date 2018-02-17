const db_connection = require('../../config/db_connection');
module.exports = function(app){
    app.get('/noticias',function(req,res){

        const connection = db_connection();


        connection.query('select * from noticias',function(error, result){
            res.render('noticias/noticias',{noticias:result});
        });
    });
}
