const express = require('express');
const app = express();

const loader = require('./loader');
app.use(loader);

app.listen(8080, () => console.log('Server is started'));