const Productmodule=require("../models/productmodel")

//get products api (path)=> /api/v1/products
exports.getproducts = async(req, res, next) => {
  
    const query = req.query.keyword?{name :{
        $regex :req.query.keyword,
        $options : "i"
    }}:{}
    const products = await Productmodule.find(query)

    res.json({
        success: true,
        products
    })
}

//get single product api (path)=> /api/v1/product/:id
exports.getsingleproduct = async (req, res, next) => {
    // console.log(req.params.id,"Id")

    try{
        const product= await Productmodule.findById(req.params.id)

        res.json({
            success: true,
            product
        })
    }
    catch (error){
        res.status(404).json({
            success: false,
            message : " Unable to reach the product with that id"
        })
    }
    
}