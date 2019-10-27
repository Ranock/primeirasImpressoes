const LivroDao = require('../dao/LivroDao')
module.exports = app =>{
    app.get('/livros', (req,res ) => {
        let ldao = new LivroDao();
        ldao.lista()
                .then( livros => {
                    res.marko(require('../views/index/index.marko'),
                    {
                        livros :livros
                    });
                })
                .catch(err => console.log(err));       
    })

    app.get('/livros/form', (req,res ) => {
        res.marko(require('../views/form/form.marko'), {livro:{}});
    })

    app.get('/livros/form/:id', (req,res ) => {
        let id = req.params.id;
        let ldao = new LivroDao();
     
        ldao.buscaPorId(id).then(livro =>{
            res.marko(require('../views/form/form.marko'), {livro:livro})
        })
        .catch(err => console.log(err));
        
    })


    app.delete('/livros/:id', (req,res ) => {
        let id = req.params.id;
        let ldao = new LivroDao();
        console.log('passou');
        ldao.delete(id).then(() => res.status(200).end())
                       .catch((err) => console.log(err))
    })


    app.post('/livros', (req, res) =>{
        let ldao = new LivroDao();
        ldao.save(req.body)
                .then(res.redirect('/livros'))
                .catch(x=>console.log(x));
    })

    app.put('/livros', (req, res) =>{
        let ldao = new LivroDao();
        ldao.atualiza(req.body)
                .then(res.redirect('/livros'))
                .catch(x=>console.log(x));
    })

}