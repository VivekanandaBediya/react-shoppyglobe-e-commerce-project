import { useDispatch } from "react-redux";

import {removeFromCart,increaseQty,decreaseQty} from "../redux/cartSlice";

function CartItem({item}){

 const dispatch = useDispatch();

 return(
  <div>

   <h3>{item.title}</h3>

   <p>Quantity: {item.quantity}</p>

   <button onClick={()=>dispatch(increaseQty(item.id))}>+</button>

   <button onClick={()=>dispatch(decreaseQty(item.id))}>-</button>

   <button onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button>

  </div>

 )

}

export default CartItem;