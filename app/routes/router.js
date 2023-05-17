function homeRouteHandler(req, res) {
  res.send('Olá mundo!');
}

module.exports = function (app) {
  app.get('/', homeRouteHandler);
};