const express = require("express");
const sequelize = require("./dbConnection").sequelize;
const app = express();

const PORT = 5000;

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

app.use('/api/', require('./routes/notes'));

app.get('/', (req, res) => {
    res.status(200).json({
        success: true
    })
})

app.listen(5000, () => {
    connect();
    console.log(`server is listening on PORT ${PORT}`);
})