import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/cartSlice";

function Header(){

 const dispatch = useDispatch();

 return(

  <header className="header">

   <h2>ShoppyGlobe</h2>

   <input
    placeholder="Search products"
    onChange={(e)=>
      dispatch(setSearchTerm(e.target.value))
    }
   />

   <nav>
    <Link to="/">Home</Link>
    <Link to="/cart">Cart</Link>
   </nav>

  </header>

 )

}

export default Header;