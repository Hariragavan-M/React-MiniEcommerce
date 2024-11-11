const mongoose = require("mongoose")

//post products api (path)=> /api/v1/order
const orderschema = new mongoose.Schema({
    cartitems : Array,
    amount : String,
    status : String,
    createdat : Date
})

const ordermodule = mongoose.model( "order",orderschema)
module.exports = ordermodule