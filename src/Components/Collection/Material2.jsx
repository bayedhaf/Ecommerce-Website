import { Link } from "react-router-dom";

const Material2 = ({ posts }) => {
  
  const displayedPosts = posts.slice(0, 2);

  return (
    <div className="bg-yellow-100 pb-10">
      <div className="flex flex-wrap gap-7 pt-10 justify-around bg-yellow-100">
        {displayedPosts.map((post) => (
          <div key={post.id} className=" bg-yellow-100 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <img
              src={post.image}
              alt={`Post ${post.id}`}
              className="bg-yellow-100 w-full h-auto object-cover"
            />
            <span className="mt-8">{post.description}</span>
            <span className="mt-2">{post.price}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-around gap-7 mt-4">
        <span>
          <Link to="/Collection" className="underline hover:text-blue-600">
            View More
          </Link>
        </span>
        <span>
          <Link to="/Collection" className="underline hover:text-blue-600">
            View More
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Material2;
