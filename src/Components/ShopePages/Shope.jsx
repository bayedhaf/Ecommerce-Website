import ShopDisply from "./ShopeComponents/ShopDisply";
import Navbar from "../Navbar/Navbar";
import { Posts } from "./ShopeComponents/Filter";
import Post from "./ShopeComponents/Post";
const Shope = () => {
    return (
        <div className="m-auto">
            <Navbar/>
            <ShopDisply/>
            {Posts.map((post)=>(
           <Post key={post.id}  postdata={post}/>
        ))

        }
        </div>
    );
};

export default Shope;