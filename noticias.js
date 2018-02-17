let http =  require('http');

http.createServer(function(req,res){
    let categoria = req.url; // Recuperando o que apartir da barra
    if(categoria == '/tecnologia')
        res.end("<html><body><h1>Noticias de Tecnologia</h1></body></html>");    
    else if(categoria == '/moda')
        res.end("<html><body><h1>Noticias de Moda</h1></body></html>");
    else if(categoria == '/beleza')    
        res.end("<html><body><h1>Noticias de Beleza</h1></body></html>");
    else
        res.end("<html><body><h1>Portal de Noticias</h1></body></html>");
    
}).listen(3000);