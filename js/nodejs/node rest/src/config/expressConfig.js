const express = require('express');
const expressValidator = require('express-validator');
const rotas = require('../routes/routes');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(expressValidator());
consign()
    .include('src/routes')
    .then('src/services')
    .into(app)

module.exports = app;