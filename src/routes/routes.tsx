import App from "../App";
import CheckOutPage from "../Pages/CheckOutPage";

const routes=[
    {
      path: "/",
      element: <App/>,
      children:[
        
        {
          path: "cart",
          element: <CheckOutPage/>,
        },
      ]
    }
  ]
  export default routes;