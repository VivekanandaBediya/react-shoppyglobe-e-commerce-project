import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import "../App.css"

function ProductDetail(){

 const {id} = useParams();

 const [product,setProduct] = useState(null);

 useEffect(()=>{
    const fetchProduct = async()=>{

   const res = await fetch(`https://dummyjson.com/products/${id}`);

   const data = await res.json();

   setProduct(data);

  };

  fetchProduct();

 },[id]);

 if(!product) return <p>Loading...</p>;

 return(

  <div className="ProductItem-details">

   <h2>{product.title}</h2>

   <img src={product.thumbnail}/>

   <p>{product.description}</p>

   <h3>${product.price}</h3>

   <p>Category : {product.category}</p>
   <p>Discount % : {product.discountPercentage}</p>
   <p>Rating : {product.rating}</p>
   <p>Stock : {product.stock}</p>
   <p>Brand : {product.brand}</p>
   <p>Warranty : {product.warrantyInformation}</p>
   <p>Shipping : {product.shippingInformation}</p>
   <p>ReturnPolicy : {product.returnPolicy}</p>

  </div>

 )

}

export default ProductDetail;