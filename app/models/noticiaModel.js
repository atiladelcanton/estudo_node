function Noticias(connection){
    this._connection = connection;
}
Noticias.prototype.getNoticias = function (callback) {

    this._connection.query('select * from noticias',callback);
};

Noticias.prototype.getNoticia = function (callback,parameter){
    this._connection.query('select * from noticias where slug = "'+parameter+'"',callback);
}

Noticias.prototype.salvarNoticias = function (noticia,callback){
    this._connection.query('insert into noticias set ?',noticia,callback);
}

module.exports = function(){
    
    return Noticias;
}