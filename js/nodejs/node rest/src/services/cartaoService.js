const restifyClients = require('restify-clients');

class CartaoService{
    constructor(){
        this._cliente = restifyClients.createJsonClient({
            url:'http://localhost:3001',
            version: '~1.0'
        });
    }
    autoriza(info, callback){
        this._cliente.post('/autoriza',info, callback);
    }
}
module.exports =  () => {
    return () => {
        return new CartaoService();
    }
    
}