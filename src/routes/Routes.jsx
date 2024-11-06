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
          element: <Statistics/>
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
      ]
    },
    ])
    

    export default routes