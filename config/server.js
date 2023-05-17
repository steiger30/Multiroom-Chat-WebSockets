const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const { check } = require("express-validator");
const path = require("path");

const app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');

/* configurar o middleware express.static */
app.use(express.static(path.join(__dirname, 'app', 'public')));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({ extended: true }));

/* configurar o middleware express-validator */
app.use(check());

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);

module.exports = app;
