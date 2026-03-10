import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

function ProductDetail(){

 const {id} = useParams();

 const [product,setProduct] = useState(null);

 useEffect(()=>{

  const fetchProduct = async()=>{

   const res = await fetch(
    `https://dummyjson.com/products/${id}`
   );

   const data = await res.json();

   setProduct(data);

  };

  fetchProduct();

 },[id]);

 if(!product) return <p>Loading...</p>;

 return(

  <div>

   <h2>{product.title}</h2>

   <img src={product.thumbnail}/>

   <p>{product.description}</p>

   <h3>${product.price}</h3>

  </div>

 )

}

export default ProductDetail;