import { useEffect, useState } from "react";

const useProducts = ()=>{

  const [products,setProducts]=useState([]);
  const [error,setError]=useState(null);

  useEffect(()=>{

    const fetchProducts = async ()=>{

      try{
        const res = await fetch("https://dummyjson.com/products");

        const data = await res.json();

        setProducts(data.products);

      }
      catch(err){
        setError("Failed to load products");
      }

    };

    fetchProducts();

  },[]);

  return {products,error};

};

export default useProducts;