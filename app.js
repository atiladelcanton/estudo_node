var app = require('./config/server');
var rota_noticias = require('./app/routes/noticias')(app);
var rota_home = require('./app/routes/home')(app);
var rota_admin = require('./app/routes/admin')(app);
app.listen(3000,function(){
    console.log('Servidor rodando com express');
    
});
