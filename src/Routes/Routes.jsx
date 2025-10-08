import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Footer from "../Components/Footer";
import Wishlist from "../Pages/Wishlist";

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
        loader:()=>fetch('./furnitureData.json'),
      },

      {
        path: "/products",
        element: <Products></Products>,
      },
       {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },

]);
export default router;
