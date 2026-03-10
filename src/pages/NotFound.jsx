import { useRouteError } from "react-router-dom";

function NotFound(){

 const error = useRouteError();

 return(

  <div>

   <h1>404 Page Not Found</h1>

   <p>{error?.statusText}</p>

  </div>

 )

}

export default NotFound;