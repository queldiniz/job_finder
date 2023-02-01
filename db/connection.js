//chamando o pacote sqlite3
const Sequelize = require('sequelize');

//criando conexao, instacie
const sequelize = new Sequelize({
    //banco que vou utilizar
    dialect: 'sqlite',
    //onde esta o banco
    storage: './db/app.db'
});

//exportando a conexao do db
module.exports = sequelize