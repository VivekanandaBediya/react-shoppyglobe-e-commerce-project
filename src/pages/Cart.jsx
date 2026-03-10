import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart(){

 const items = useSelector(state=>state.cart.items);

 return(
  <div>
   <h2>Your Cart</h2>

   {items.map(item=>(<CartItem key={item.id} item={item}/>))}

   <Link to="/checkout">Checkout</Link>
  </div>
 )
}

export default Cart;