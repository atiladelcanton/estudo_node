module.exports = function(){
    this.getNoticias = (connection, callback) =>{
        connection.query('select * from noticias',callback);
    }
    this.getNoticia = (connection,callback,parameter) => {
        connection.query('select * from noticias where slug = "'+parameter+'"',callback);
    }
    return this;
}