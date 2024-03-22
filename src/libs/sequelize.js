const { Sequelize} = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('./../db/models');

// const  sequelize = new Sequelize(
//     config.dbName,
//     config.dbUser,
//     config.dbPassword,
//     {
//         host: config.dbHost,
//         dialect: 'postgres'
//     }
// );

const sequelize = new Sequelize(process.env.DB_LINK, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true,
        native:true
    }, //removed ssl
  });

sequelize.sync();
setupModels(sequelize);

module.exports =  sequelize;
