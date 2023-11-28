const express = require('express');
const app = express();
const path=require('path');

app.use(express.static(path.join(__dirname,'public')));

const homeRouter = require("./route/homeRoute.js");

app.use("/", homeRouter);


app.listen(3030,()=>{
    console.log('Servidor funcionando')
});

