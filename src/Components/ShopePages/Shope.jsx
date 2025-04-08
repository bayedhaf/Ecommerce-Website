import ShopDisply from "./ShopeComponents/ShopDisply";
import Navbar from "../Navbar/Navbar";
import ShopAPI  from "./ShopAPI"
import Footer from "../../Pages/Footer";
import Service from "../../Pages/Service";


const Shope = () => {
    
    return (
        <div className="m-auto">
            <Navbar/>
            <ShopDisply/>
            <ShopAPI />
            <Service/>
            <Footer/>
        </div>
    );
};

export default Shope;