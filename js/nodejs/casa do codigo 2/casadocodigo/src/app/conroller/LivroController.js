const LivroDao = require('../infra/livro-dao');
const template = require('../views/templates');
const db = require('../../config/database');

class LivroController{

    static rotas() {
        return {
            autenticadas: '/livros*',
            lista: '/livros',
            cadastro: '/livros/form',
            edicao: '/livros/form/:id',
            delecao: '/livros/:id'
        };
    }

    lista(){
        return  function(req, resp) {
            const livroDao = new LivroDao(db);
            livroDao.lista()
                    .then(livros => resp.marko(
                        template.livros.lista,
                        {
                            livros: livros
                        }
                    ))
                    .catch(erro => console.log(erro));
        }
    }
    retornaPorId(){
        return function(req, resp) {
            const id = req.params.id;
            const livroDao = new LivroDao(db);
    
            livroDao.buscaPorId(id)
                    .then(livro => 
                        resp.marko(
                            template.livros.form, 
                            { livro: livro }
                        )
                    )
                    .catch(erro => console.log(erro));
        }
    }
    adiciona(){
        return  function(req, resp) {
            console.log(req.body);
            const livroDao = new LivroDao(db);
            const erros = validationResult(req);
            if (!erros.isEmpty())
            {
       
                return resp.marko(
                        template.livros.form, 
                        { 
                            livro: {},
                            errosValidacao: erros.array()
                        }
                    )
            }
    
            livroDao.adiciona(req.body)
                    .then(resp.redirect('/livros'))
                    .catch(erro => console.log(erro));
        }
    }

    altera(){
        return function(req, resp) {
            console.log(req.body);
            const livroDao = new LivroDao(db);
            
            livroDao.atualiza(req.body)
                    .then(resp.redirect('/livros'))
                    .catch(erro => console.log(erro));
        }
    }

    apaga(){
        return function(req, resp) {
            const id = req.params.id;
    
            const livroDao = new LivroDao(db);
            livroDao.remove(id)
                    .then(() => resp.status(200).end())
                    .catch(erro => console.log(erro));
        }
    }

    cadastra(){
        return function(req, resp) {
            resp.marko(template.livros.form, { livro: {} });
        }
    }
}

module.exports = LivroController;