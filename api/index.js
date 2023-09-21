const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { errorHandler, logErrors, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = [ 'hhtp://localhost:8080', 'http://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'))
    }
  }
}

app.use(cors(options));

app.get('/api', (req, res)=> {
  res.send('Holita, desde el server en express');
});

app.get('/api/nueva-ruta', (req, res)=> {
  res.send('Holita, soy una nueva ruta');
});

routerApi(app)

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Corriendo desde el puerto ' + port);
})
