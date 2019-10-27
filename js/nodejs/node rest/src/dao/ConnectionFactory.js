var mysql = require('mysql');

class ConnectionFactory{
    static createConnection(){
        return mysql.createConnection({
            host:"localhost",
            user:'root',
            password:"hugo",
            database: 'testenode'
        })
    }
}
module.exports = ConnectionFactory;