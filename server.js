const express = require("express");
const sequelize = require("./dbConnection").sequelize;
const app = express();
const bodyParser = require("body-parser");

const PORT = 5000;

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.urlencoded({extended : true}));
app.use(express.json())

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

app.use('/api/v1/', require('./api/v1/notesApi.js'));

app.get('/', (req, res) => {
    res.status(200).json({
        success: true
    })
})

app.listen(5000, () => {
    connect();
    console.log(`server is listening on PORT ${PORT}`);
})