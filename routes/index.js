const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const routerCategories = require('./categories.router');

function routerApi (app) {
  const router = express.Router();
  app.use('/api/v1', router);

    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use('/categories', routerCategories);
}

module.exports = routerApi;