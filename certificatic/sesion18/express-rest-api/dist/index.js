"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const express = require('express')
const app = (0, _express.default)();
const port = 4000;
app.get('/', (req, res) => res.end('Hello World!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));