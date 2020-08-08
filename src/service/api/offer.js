const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);

const route = new Router();

module.exports = (app, service) => {
  app.use(`/offers/`, route);

  route.get(`/`, (req, res) => {
    
  });

  route.get(`/:offerId`, (req, res) => {

  });

  route.post(`/`, (req, res) => {

  });

  route.put(`/:offerId`, (req, res) => {

  });

  route.delete(`/:offersId`, (req, res) => {

  });

  route.post(`/:offerId/comments`, (req, res) => {

  });

  route.delete(`/:offerId/comments/:commentId`, (req, res) => {

  });

}