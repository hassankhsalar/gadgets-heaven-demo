import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import MainLayout from "../layouts/MainLayout"
import Gadgets from "../pages/Gadgets"
import GadgetDetails from "../pages/GadgetDetails"
import Wishlist from "../pages/Wishlist"
import Home from "../pages/Home"
import DashBoard from "../pages/DashBoard"
import Statistics from "../pages/Statistics"


const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children:[
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: '/gadgets',
          element: <Gadgets />
        },
        {
          path: '/gadgetDetails',
          element: <GadgetDetails />
        },
        {
          path: '/statistics',
          element: <Statistics/>
        },
        {
          path: '/dashBoard',
          element: <DashBoard/>,
        },
      ]
    },
    ])
    

    export default routes