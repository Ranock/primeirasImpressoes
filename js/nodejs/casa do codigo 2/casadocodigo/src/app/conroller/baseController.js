
const template = require('../views/templates');

const LivroControlador = require('./LivroController');

class BaseController{

    static rotas() {
        return {
            index: '/',
            login: '/login'
        };
    }

    login() {        
        return function(req, resp) {
            resp.marko(template.base.login);
        };
    }

    index(){
       return function(req, resp) {
            resp.marko(
                require(template.base.home)
            );
        }
    }
    efetuaLogin(){
        return (req, res, next) =>{
            const passport = req.passport;
            passport.authenticate('local', (err, usu,info)=>{
                if(info)
                    return res.marko(template.base.login);
                if (err)
                    return next(err);
                req.login(usu, (err)=>{
                    if (err)
                        return next(err);
                    return res.redirect(LivroControlador.rotas().lista)

                })
            })(req, res, next)
        }
    }
}
module.exports = BaseController;