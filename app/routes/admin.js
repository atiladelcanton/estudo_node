module.exports = function(app){
    app.get('/admin',function(req,res){
        res.render('admin/form_add_noticia');
    });
    app.post('/admin/noticias/salvar',function(req,res){
        var noticia = req.body;

        const connection = app.config.db_connection();
        const noticiasModel = new app.app.models.noticiaModel(connection)
        noticiasModel.salvarNoticias(noticia,function(error, result){
            res.redirect('/noticias');
        });

    });
}