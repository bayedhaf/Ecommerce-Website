import { Link } from "react-router-dom";

const Livingroom = ({ posts }) => {
 
  const displayedPosts = posts.slice(0, 3);

  return (
    <div className="bg-white pb-10">
         <div className="pt-8 text-center flex-col gap-3 marker:">
            <h1 className="md:text-2xl lg:text-3xl sm:text-xl font-bold">Top Picks For You</h1>
            <p className="text-xl">Find a bright ideal to suit you taste with our great selection of suspension,floor and table lights</p>

         </div>
      <div className="flex flex-wrap gap-7 pt-10 justify-around">
        {displayedPosts.map((post) => (
            
          <div
            key={post.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={post.image}
              alt={`Post ${post.id}`}
              className="w-full h-auto object-cover"
            />
            <div className="mt-8">
              <span>{post.description}</span>
            </div>
            <div className="mt-2">
              <span>{post.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex text-center justify-around gap-7 mt-4">
        <span>
          <Link to="/Collection" className="underline hover:text-blue-600">
            View More
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Livingroom;
