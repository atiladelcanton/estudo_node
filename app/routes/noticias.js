
module.exports = function(app){
    
    app.get('/noticias',function(req,res){
        var connection = app.config.db_connection();
        const noticiasModel = new app.app.models.noticiaModel(connection)    
        noticiasModel.getNoticias(function(error, result){
            res.render('noticias/noticias',{noticias:result});
        });
    });

    app.get('/noticia/:slug',function(req,res){
        const connection = app.config.db_connection();
        const noticiasModel =  new app.app.models.noticiaModel(connection)
        noticiasModel.getNoticia(function(error, result)
                                {
                                    res.render('noticias/noticia',{noticia:result});
                                },req.params.slug);
    });
}
