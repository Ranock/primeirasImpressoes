const LivroController = require('../conroller/LivroController');
const BaseController = require('../conroller/baseController');

const Livro = require('../models/livro');


const livroController = new LivroController();

const rotasLivro = LivroController.rotas();
module.exports = (app) => {
    
    app.use(rotasLivro.autenticadas, (req, res, next)=>{
        if(req.isAuthenticated())
            next();
        else{
            res.redirect(BaseController.rotas().login)
        }
    })
    app.get(rotasLivro.lista, livroController.lista());
    app.get(rotasLivro.edicao, livroController.retornaPorId());

    app.route(rotasLivro.cadastro)
        .get(livroController.cadastra())
        .post(Livro.validacoes(), livroController.adiciona())
        .put(livroController.altera())


    app.delete(rotasLivro.delecao,livroController.apaga());
};