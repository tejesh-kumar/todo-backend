const express = require('express');
const { port } = require('../server-config');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
  console.log(`Connected to server on port ${port}`);
});
