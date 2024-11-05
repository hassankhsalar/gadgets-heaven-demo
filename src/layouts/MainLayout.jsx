import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>

            <div className="min-h-[calc(100vh-290px)]"> 
                {/* dynamic section */}
                <Outlet />
            </div>
           
            {/* footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;