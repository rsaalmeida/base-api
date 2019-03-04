const express = require('express');
const mongoose = require('./src/database');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors()); //dentro do cors, podemos colocar de quais dominios aceitamos requisicao, etc.


require('./src/controllers/authController')(app);

//requireDir('./src/models')(app);

//mongoose.connect

app.listen(3001);
ß