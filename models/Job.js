const Sequelize = require('sequelize');
const db = require('../db/connection');

//criando o objeto job
const Job = db.define('job',{
    //todas as propr que o objeto job possui, ATENCAO, PRECISA ESTAR IGUAL A TABELA
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    },
});

module.exports = Job