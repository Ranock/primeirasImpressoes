const BaseController = require('../conroller/baseController');
const baseController = new BaseController();
module.exports = (app) => {
    
    app.get(BaseController.rotas().index, baseController.index());

    app.route(BaseController.rotas().login)
        .get(baseController.login())
        .post(baseController.efetuaLogin());
}