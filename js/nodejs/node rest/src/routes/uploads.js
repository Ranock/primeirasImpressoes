const fs = require('fs')

module.exports = (app) =>{
    app.post('/upload', (req, res)=>{
        let nome = req.headers.filename;
        console.log('recebendo upload')
        req.pipe(fs.createWriteStream('src/arqs/'+nome))
        .on('finish', ()=>{
            res.status(200).send();
        })
    })


}