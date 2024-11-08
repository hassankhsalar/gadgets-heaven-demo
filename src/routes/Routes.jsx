import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import MainLayout from "../layouts/MainLayout"
import Gadgets from "../pages/Gadgets"
import GadgetDetails from "../pages/GadgetDetails"

import Home from "../pages/Home"
import DashBoard from "../pages/DashBoard"
import Statistics from "../pages/Statistics"
import GagdgetCards from "../components/GagdgetCards"
import CartList from "../cartList/CartList"
import WishList from "../WishList/WishList"
import TechBlog from "../pages/techBlog"


const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children:[
        {
          path: '/',
          element: <Home/>,
          loader: ()=> fetch('/categories.json'),
          children: [
            {
              path: '/',
              element: <GagdgetCards />,
              loader: ()=> fetch('../gadgets.json'),
            },
            {
              path: '/category/:category',
              element: <GagdgetCards />,
              loader: ()=> fetch('../gadgets.json'),
            },
          ],
        },
        {
          path: '/gadgets',
          element: <Gadgets />
        },
        {
          path: '/gadgetDetails/:id',
          element: <GadgetDetails />,
          loader: ()=> fetch('../gadgets.json'),
        },
        {
          path: '/statistics',
          element: <Statistics/>,
          loader: ()=> fetch('../gadgets.json'),
        },
        {
          path: '/dashBoard',
          element: <DashBoard/>,
        },
        {
          path: '/cartlist',
          element:<CartList></CartList>,
          loader: ()=> fetch('../gadgets.json'),
        },
        {
          path: '/wishlist',
          element: <WishList />,
          loader: () => fetch('../gadgets.json'),
        },
        {
          path: '/techblog',
          element: <TechBlog />,
        },
      ]
    },
    ])
    

    export default routes