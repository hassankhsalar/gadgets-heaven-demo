import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import MainLayout from "../layouts/MainLayout"
import Gadgets from "../pages/Gadgets"
import GadgetDetails from "../pages/GadgetDetails"

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
          loader: ()=> fetch('https://gist.githubusercontent.com/hassankhsalar/930b931259b0f2fc153ea856b429ff76/raw/f075f8ff231f6f2c4a8681969308d514216a38fb/categories.json'),

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