import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";




const ShopDisply = () => {
    return (
       <div className="m-auto text-center">
          <div className="border border-black text-center flex flex-row justify-center bg-[url('.../../assets/furn3.jpg')] w-full h-[400px]">
            <h1 className="text-3xl mt-48 ">Shop</h1>
            <div className="mt-60">  <Link to="/home">Home</Link></div>
             <div className="mt-60"> <MdChevronRight /></div>
            <div className="mt-60">  <Link to="/Shope">Shop</Link></div>
        </div>
        
   
       </div>
    );
};

export default ShopDisply;