class PagamentoDao {
    constructor(con){
        this._connection = con; 
    }
    salva (pagamento,callback) {
        this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback);
    }
    
    lista (callback) {
        this._connection.query('select * from pagamentos',callback);
    }
    
    buscaPorId (id,callback) {
        this._connection.query("select * from pagamentos where id = ?",[id],callback);
    }
    atualiza(pagamento, callback){
        this._connection.query(`update pagamentos set 
                                 nome =?,
                                 status = ? 
                                 where id = ?`,
                                 [pagamento.nome, 
                                  pagamento.status, 
                                  pagamento.id],
                                  callback);
    }
}
module.exports =  PagamentoDao;