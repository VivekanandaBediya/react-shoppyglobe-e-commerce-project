import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// import ProductList from "../pages/ProductList";
// import ProductDetail from "../pages/ProductDetail";
// import Cart from "../pages/Cart";
// import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";

import React,{lazy,Suspense} from "react";

const ProductList = lazy(()=>import("../pages/ProductList"));
const ProductDetail = lazy(()=>import("../pages/ProductDetail"));
const Cart = lazy(()=>import("../pages/Cart"));
const Checkout = lazy(()=>import("../pages/Checkout"));

export const router = createBrowserRouter([

{
 path:"/",
 element:<App/>,
 errorElement:<NotFound/>,

 children:[

  { path:"/", element:<ProductList/> },

  { path:"/product/:id", element:<ProductDetail/> },

  { path:"/cart", element:<Cart/> },

  { path:"/checkout", element:<Checkout/> }

 ]
}

]);