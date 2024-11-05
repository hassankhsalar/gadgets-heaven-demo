import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import MainLayout from "../layouts/MainLayout"


const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
    },
    ])
    

    export default routes