const expressConf = require('./src/config/expressConf')

const app = expressConf;

app.listen(3001, ()=>{
    console.log('servidor rodando')
})