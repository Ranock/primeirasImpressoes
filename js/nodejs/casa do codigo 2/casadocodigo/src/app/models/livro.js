const {check} = require('express-validator/check');
class Livro{
    static validacoes(){
        return [
                check('titulo').isLength(5).withMessage('O Titulo precisa ter 5 letras'),
                check('preco').isCurrency().withMessage('preço precisa ser monetario')
            ]
        }
}
module.exports = Livro;