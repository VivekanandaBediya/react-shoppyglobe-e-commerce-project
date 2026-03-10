import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Suspense } from "react";

function App(){

 return(

  <div>

   <Header/>

   <Suspense fallback={<h2>Loading...</h2>}>

     <Outlet/>

   </Suspense>

  </div>

 )

}

export default App;