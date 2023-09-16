const express = require('express');
const routerUser = express.Router();

routerUser.get('/users', (req, res) => {

  const {limit, offset} = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parametros')
  }
})

module.exports = routerUser;
