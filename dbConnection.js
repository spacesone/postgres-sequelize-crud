const Sequelize = require("sequelize");


const sequelize = new Sequelize("postgresql://space:CoiExS2MUuzyvWl9eFdlOA@firm-amoeba-7306.8nk.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full", {
    dialect : "postgres"
});



module.exports = {
    sequelize
}