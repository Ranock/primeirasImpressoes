const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')

const app = express();
app.use(bodyParser.json());
consign()
.include('src/rotas')
.into(app);

module.exports = app;