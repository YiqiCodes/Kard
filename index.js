const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(3333, () =>
  console.log('Express server is running on localhost:3333')
);