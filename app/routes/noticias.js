
module.exports = function(app){
    app.get('/noticias',function(req,res){

        const connection = app.config.db_connection();


        connection.query('select * from noticias',function(error, result){
            res.render('noticias/noticias',{noticias:result});
        });
    });
}
