const express =require('express');
const app =express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require("cors")
dotenv.config({path:path.join(__dirname, 'confg', 'confg.env')});

const products = require('./routes/product');
const orders = require('./routes/order');
const connectdatabase = require('./confg/connectdatabase');

connectdatabase()

app.use(express.json())
app.use(cors())
app.use('/api/v1/', products)
app.use('/api/v1/', orders);

app.listen(process.env.PORT,()=>{
    console.log(` The server port is  ${process.env.PORT} and we are in  ${process.env.NODE_ENV} `);
})