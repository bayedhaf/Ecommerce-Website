import ShopDisply from "./ShopeComponents/ShopDisply";
import Navbar from "../Navbar/Navbar";
import ShopAPI  from "./ShopAPI"


const Shope = () => {
    
    return (
        <div className="m-auto">
            <Navbar/>
            <ShopDisply/>
            <ShopAPI />
        </div>
    );
};

export default Shope;