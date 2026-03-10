import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/cartSlice";

function Header(){

 const dispatch = useDispatch();

 return(

  <header className="header">

   <h2>ShoppyGlobe</h2>

   <input placeholder="Search products" onChange={(e)=>dispatch(setSearchTerm(e.target.value))}/>

   <nav>
    <Link to="/" className="nav-list">Home</Link>
    <Link to="/cart" className="nav-list">Cart</Link>
   </nav>

  </header>

 )

}

export default Header;