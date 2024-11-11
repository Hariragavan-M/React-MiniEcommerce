import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

export default function Productdetails({ cartitems, setcartitems }) {
    const [product, setproduct] = useState(null)
    const [quantity, setquantity] = useState(1)
    const { id } = useParams()

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "/product/" + id)
            .then((res) => res.json())
            .then((res) => setproduct(res.product))
    }, [])

    function addtocart() {
        const itemexist = cartitems.find((item) => item.product._id == product._id)

        if (!itemexist) {
            const newitem = { product, quantity }
            setcartitems((state) => [...state, newitem])
            toast.success(" Cart Item Added Successfully...! ")
        }
    }

    function increaseQuantity() {

        if (product.stock == quantity) {
            return
        }
        else {
            setquantity((state) => state + 1)
        }
    }

    function decreasequantity() {

        if (quantity == 1) {
            return
        }
        else {
            setquantity((state) => state - 1)
        }
    }
    return (
        product && <>
            <div className="container container-fluid">
                <div className="row f-flex justify-content-around">
                    <div class="col-12 col-lg-5 img-fluid" id="product_image">
                        <img src={product.images[0].image} height="500" width="500" alt={`${product.name}`} />
                    </div>

                    <div className="col-12 col-lg-5 mt-5">
                        <h3>{product.name}</h3>
                        <p id="product_id">Product # {product._id}</p>

                        <hr />

                        <div className="rating-outer">
                            <div className="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }}></div>
                        </div>


                        <hr />

                        <p id="product_price">&#8377;{product.price}</p>
                        <div className="stockCounter d-inline">
                            <span className="btn btn_minus minus" onClick={decreasequantity}>-</span>
                            <input type="number" class="form-control count d-inline" value={quantity} readOnly />
                            <span className="btn btn_plus plus" onClick={increaseQuantity}>+</span>
                        </div>
                        <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" onClick={addtocart} disabled={product.stock ==0 } >Add to Cart</button>

                        <hr />

                        <p>Status : <span id="stock_status" className={product.stock > 0 ? "text-success" : "text-danger"}>{product.stock > 0 ? " In Stock " : " Out of Stock "}</span></p>

                        <hr />

                        <h4 class="mt-2">Description :</h4>
                        <p>{product.description}</p>
                        <hr />
                        <p id="product_seller mb-3">Sold by : <strong>{product.seller}</strong></p>

                        <div className="rating w-50"></div>

                    </div>

                </div>

            </div>
        </>
    )
}