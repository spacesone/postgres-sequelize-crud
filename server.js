const express = require("express");

const app = express();

const PORT = 5000;

app.get('/', (req,res) => {
    res.status(200).json({
        success : true
    })
})

app.listen(5000, () => {
    console.log(`server is listening on PORT ${PORT}`);
})