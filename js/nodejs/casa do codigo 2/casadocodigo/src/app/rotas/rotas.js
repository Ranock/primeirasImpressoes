const livroRotas = require('./livro-rota');
const baseRotas = require('./base-rota');

module.exports = (app) => {
    livroRotas(app);
    baseRotas(app);
};