const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
app.use(express.json());

// Test database connection

sequelize.authenticate()
    .then(() => {console.log('Conectado ao banco de dados!!')})
    .catch(err => console.error('Error ao conectar:',err));    

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});