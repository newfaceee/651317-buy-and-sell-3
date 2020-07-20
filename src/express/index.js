'use strict';
const express = require(`express`);
const path = require(`path`);

const offerRoutes = require(`./routes/offers-routes`);
const myRoutes = require(`./routes/my-routes`);
const mainRoutes = require(`./routes/main-routes`);

const {HttpCode, DEFAULT_PORT, PUBLIC_DIR} = require(`../constants`);

const app = express();
app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.use(`/`, mainRoutes);
app.use(`/offers`, offerRoutes);
app.use(`/my`, myRoutes);

app.use((req, res) => {
  res.status(HttpCode.NOT_FOUND).render(`./errors/404`);
});

app.use((req, res) => {
  res.status(HttpCode.INTERNAL_SERVER_ERROR).render(`./errors/500`);
});

app.listen(DEFAULT_PORT);
