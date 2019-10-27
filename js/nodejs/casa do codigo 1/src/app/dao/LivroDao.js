const db = require('../../config/database')
class LivroDao {
    constructor(){
        this._db = db;
    }
    lista(){
        return new Promise( (resolve, reject) =>{
            this._db.all(
                'select * from livros',
                (erro,result) =>{
                    if (erro)
                        return reject(erro);
                    else
                        return resolve(result);
                }
            )
        })
    }
    save(livro){
        return new Promise( (resolve, reject) =>{
            this._db.run(
                `insert into livros (
                    titulo, 
                    preco, 
                    descricao
                )
                values (?,?,?)`,
                [livro.titulo,
                 livro.preco,
                 livro.descricao],
                (err) =>{
                    if (err)
                        return reject(err)
                    return resolve();
                }
            )
        })   
    }
    delete(id){
        return new Promise( (resolve, reject) =>{
            this._db.run(
                `delete from livros where id = ?`,
                [id],
                (err) =>{
                    if (err)
                        return reject(err)
                    return resolve();
                }
            )
        }) 
    }
    atualiza(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o livro!');
                }

                resolve();
            });
        });
    }

    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM livros
                    WHERE id = ?
                `,
                [id],
                (erro, livro) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o livro!');
                    }
                    return resolve(livro);
                }
            );
        });
    }

}
module.exports = LivroDao;