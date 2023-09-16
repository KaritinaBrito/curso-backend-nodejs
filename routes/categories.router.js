const express = require('express');
const routerCategories = express.Router();

routerCategories.get('/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId
  })
});

routerCategories.get('/', (req, res) => {
  res.json([
    {
      category: 'electronics',
      product: []
    },
    {
      category: 'Food',
      product: []
    }
  ])
})
routerCategories.get('/:categoryId', (req, res) => {
  const {categoryId} = req.params;
  res.json(
    {
      categoryId,
      category: 'Food',
      product: []
    }
  )
})

module.exports = routerCategories;
