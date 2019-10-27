const fs = require('fs')
fs.readFile('download.jpg', (err, buffer)=>{
    fs.writeFile('download2.jpg', buffer, (err)=>{
        console.log(err);
        console.log('arquivo escrito')
    })
})