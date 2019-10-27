const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UsuarioDao = require('../app/infra/usuario-dao');



module.exports = (app) => {
    passport.use(new LocalStrategy(
        {
            usernameField : 'email',
            passwordField: 'senha'
        },
        (email, senha, done) =>{
            const usuDao = new UsuarioDao();
           
            usuDao.buscaPorEmail(email)
                    .then(usu =>{
                    if (!usu || senha != usu.senha)
                            return done(null, false, {msg:'login ou senha incorretos'})
                        return done(null, usu);
                    }).catch(erro => done(null, false, erro));
        }
    ))

    passport.serializeUser((usuario, done) => {
        const usuarioSessao ={
            nome: usuario.nome_completo, 
            email: usuario.email
        }
        done(null, usuarioSessao);
    })
    passport.deserializeUser((usuarioSessao, done) =>{
        done(null, usuarioSessao);
    })

    app.use(sessao({
        secret: 'askjdalksjd',
        genid: () =>{
            return uuid()
        },
        resave: false,
        saveUninitialized:false //salva sessao só se logar
    }))

    app.use(passport.initialize());
    app.use(passport.session());
    
    app.use((req, res, next)=>{
        req.passport = passport;
        next()
    })
}
