import useProducts from "../hooks/useProducts";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

function ProductList(){

 const {products,error}=useProducts();

 const searchTerm = useSelector(state=>state.cart.searchTerm);

 const filteredProducts = products.filter(p=>p.title.toLowerCase().includes(searchTerm.toLowerCase()));

 if(error) return <p>{error}</p>;

 return(

  <div className="product-grid">

   {filteredProducts.map(product=>(
    <ProductItem key={product.id} product={product} />
    ))}

  </div>

 )

}

export default ProductList;