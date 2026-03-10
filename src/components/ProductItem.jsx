import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function ProductItem({product}){

 const dispatch = useDispatch();

 return(
  <div className="product-card">
   <img src={product.thumbnail} loading="lazy"/>

   <h3>{product.title}</h3>

   <p>${product.price}</p>

   <Link to={`/product/${product.id}`} className="product-details">View Details</Link>

   <button onClick={()=>dispatch(addToCart(product))} className="product-details">Add To Cart</button>
  </div>

 )

}

export default ProductItem;