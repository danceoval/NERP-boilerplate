const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

express.static(path.join(__dirname, '../public'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

