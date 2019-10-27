const ConnectionFactory = require('../dao/ConnectionFactory');
const PagamentoDao = require('../dao/PagamentoDao');

module.exports = (app)=>{
    app.get('/pagamentos', (req,res)=>{
        console.log('pagamento');
        res.send('chegou em pagamentos');
    })

    app.post('/pagamentos/pagamento', (req,res)=>{
        pagamento = req.body;
        req.assert("nome", 'Nome é obrigatorio').notEmpty();
        req.assert('moeda', 'Moeda deve ter ate 3 caracteres').isLength(3);
        pagamento.status = 'CRIADO';
        pagamento.data = new Date();

        con = ConnectionFactory.createConnection();
        pagamentoDao= new PagamentoDao(con);
        let erros = req.validationErrors();
        console.log(erros);
        if (erros){

            res.status(400).send(erros);
            return;
        }
        pagamentoDao.salva(pagamento,(err, result) => {
            if (err){
                console.log(err);
                res.status(500).send(err);
            }
            else{  
                pagamento.id = result.insertId;
                let response_json = {
                    data: pagamento,
                    _links: [
                        {
                            href:'/pagamentos/pagamento/'+pagamento.id,
                            rel: 'confirmar',
                            method: 'PUT'
                            
                        },
                        {
                            href:'/pagamentos/pagamento/'+pagamento.id,
                            rel: 'cancelar',
                            method: 'DELETE'
                            
                        },
                    ]
                } 
                if( pagamento.moeda = 'BRL'){
                    let cliente = app.src.services.cartaoService();
                    cliente.autoriza({}, (erros, request, respon, result)=>{
                        if (erros){
                            res.status(500).send(erros);
                            return 
                        }
                    });
                }
                console.log('pagamento criado');
                res.location('/pagamentos/pagamento/'+pagamento.id);
                res.status(201).json(response_json);
            }
        });
     
    })
    app.delete('/pagamentos/pagamento/:id', (req,res)=>{
        let id = req.params.id;
        let pagamento = {};
        pagamento.id = id;
        pagamento.status = 'CANCELADO';
        con = ConnectionFactory.createConnection();
        pagamentoDao= new PagamentoDao(con); 
        pagamentoDao.atualiza(pagamento, (error, result)=>{
            if(error){
                res.status(500).send(error)
            }else{
                res.status(204).send(pagamento);
            }
        })

    })
    app.put('/pagamentos/pagamento/:id', (req, res)=>{
        let id = req.params.id;
        let pagamento = req.body;
        pagamento.id = id;
        pagamento.status = 'CONFIRMADO';
        con = ConnectionFactory.createConnection();
        pagamentoDao= new PagamentoDao(con); 
        pagamentoDao.atualiza(pagamento, (error, result)=>{
            if(error){
                res.status(500).send(error)
            }else{
                res.send(pagamento);
            }
        })

    })
}