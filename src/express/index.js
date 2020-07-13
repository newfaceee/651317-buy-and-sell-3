'use strict';
const express = require(`express`);
const path = require(`path`);

const offerRoutes = require(`./routes/offers-routes`);
const myRoutes = require(`./routes/my-routes`);
const mainRoutes = require(`./routes/main-routes`);

const DEFAULT_PORT = 8000;
const PUBLIC_DIR = `public`;

const app = express();
app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.use(`/`, mainRoutes);
app.use(`/offers`, offerRoutes);
app.use(`/my`, myRoutes);
app.listen(DEFAULT_PORT);
