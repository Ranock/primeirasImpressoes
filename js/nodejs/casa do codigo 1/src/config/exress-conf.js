const express = require('express');
require('marko/node-require.js');
require('marko/express');
const methodOverride = require('method-override')

const rotas = require('../app/rotas/rotas')
const app = express();
const bodyParser = require('body-parser');
app.use('/estatico', express.static('src/app/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
}));

rotas(app);
module.exports = app;