
module.exports = function(app){
    
    app.get('/noticias',function(req,res){
        const connection = app.config.db_connection();
        const noticiasModel = app.app.models.noticiaModel    
        noticiasModel.getNoticias(connection,function(error, result){
            res.render('noticias/noticias',{noticias:result});
        });
    });

    app.get('/noticia/:slug',function(req,res){
        const connection = app.config.db_connection();
        const noticiasModel = app.app.models.noticiaModel
        noticiasModel.getNoticia(connection,function(error, result)
                                {
                                    res.render('noticias/noticia',{noticia:result});
                                },req.params.slug);
    });
}
