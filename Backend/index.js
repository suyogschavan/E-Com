const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    console.log("Hello World");
    res.send("Working")
});

app.listen(5000);