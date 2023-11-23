const sequelize = require("../dbConnection").sequelize;
const {DataTypes} = require("sequelize");

const Notes = sequelize.define(
    "Notes", 
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },

        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        body : {
            type : DataTypes.STRING, 
            allowNull : false,
        }
    }
);

Notes.sync();

module.exports = {
    Notes
}
