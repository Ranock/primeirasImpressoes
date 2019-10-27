const soap = require('soap')
class CorreiosSoapClient{
    constructor(){
        this._url ='http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl'        
    }
    consulta(info,callback){
        soap.createClient(this._url,
            (erro, cliente)=>{
                cliente.CalcPrazo(info,callback)
            })
    }
}
module.exports = new CorreiosSoapClient();