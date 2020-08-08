const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);

const route = new Router();

module.exports = (app, service) => {
  app.use(`/category`, route);

  route.get(`/`, (req, res) => {
    // some code
  });

}