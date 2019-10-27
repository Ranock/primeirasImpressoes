module.exports = (app)=> {
    app.post('/autoriza', (req,res)=>{
        var result = req.body;
        result.passou =   'aweeee';
        res.send(result);
    })
}