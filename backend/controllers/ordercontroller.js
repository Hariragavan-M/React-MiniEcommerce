const ordermodel = require("../models/ordermodule")
const productmodule = require("../models/productmodel")

exports.createorder = async (req, res, next) => {

    // console.log(req.body)
    const cartitems = req.body
    const amount = Number(cartitems.reduce((acc, item) => (acc + item.product.price * item.quantity), 0)).toFixed(2)
    const status = "pending"
    const order = await ordermodel.create({ cartitems, amount, status })

    cartitems.forEach(async (item) => {
        const product = await productmodule.findById(item.product._id)
        product.stock = product.stock - item.quantity
        await product.save()
    });

    res.json({
        success: true,
        order
    })
}