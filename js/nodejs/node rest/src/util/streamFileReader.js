const fs = require('fs')
fs.createReadStream('download.jpg')
    .pipe(fs.createWriteStream('imagem3.jpg'))
    .on('finish', ()=>{
        console.log('arquivo escrito')
    })