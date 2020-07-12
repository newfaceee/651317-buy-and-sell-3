'use strict';
const express = require(`express`);

const offerRoutes = require(`./routes/offers-routes`);
const myRoutes = require(`./routes/my-routes`);
const mainRoutes = require(`./routes/main-routes`);

const DEFAULT_PORT = 8000;

const app = express();

app.use(`/`, mainRoutes);
app.use(`/offers`, offerRoutes);
app.use(`/my`, myRoutes);
app.listen(DEFAULT_PORT);
