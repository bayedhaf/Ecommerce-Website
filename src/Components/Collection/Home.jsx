import Material1 from "./Material1";
import Footer from '../../Pages/Footer'

import Material2Data from "./Material2Data";
import LivingColl from "../Cutagory/HomeMtr/LivingColl";
//import LivingColl from "../Cutagory/HomeMtr/LivingColl";

const Home = () => {
    return (
        <div className="">
          <Material1/>  
          <Material2Data/>
          <LivingColl/>
          <Footer/>
        </div>
    );
};

export default Home;