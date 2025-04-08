import Navbar from "../Navbar/Navbar";
import imgg from '../../assets/furn2.jpg'
import { Link } from "react-router-dom";

const Material1 = () => {
    return (
       <div className="bg-yellow-200 flex flex-col h-auto">
            <div className="mb-16"><Navbar /></div>
            <div className="flex flex-col md:flex-row gap-16 justify-around pt-10 px-4 md:px-8">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-black font-bold font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                        Rocket Single Seater
                    </h1>
                    <Link to='/' className="underline text-black hover:text-blue-950">
                        Shop Now
                    </Link>
                </div>
                <div className="p-6 w-full md:w-1/2 lg:w-1/3">
                    <img src={imgg} alt="Rocket Single Seater" className="w-full h-auto object-cover" />
                </div>
            </div>
       </div>
    );
};

export default Material1;
