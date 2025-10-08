import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Footer from "../Components/Footer";
import Wishlist from "../Pages/Wishlist";
import ProductDetails from "../Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<h1>Loading....</h1>,
    children: [
      {
        index:true,
        element: <Home></Home>,
       
      },

      {
        path: "/products",
        element: <Products></Products>,
       // loader:()=>fetch('./furnitureData.json'),
      },
       {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path:'/product/:id',
        element:<ProductDetails></ProductDetails>,
      }
    ],
  },

]);
export default router;
