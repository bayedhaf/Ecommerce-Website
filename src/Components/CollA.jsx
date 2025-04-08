const CollA = ({ posts }) => {
    return (
      <div className="mt-28 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-items-center">
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={post.image}
                alt={`Post ${post.id}`}
                className="w-full h-auto object-cover"
              />
              <div className="mt-2 text-center">
                <p className="text-lg font-semibold">{post.description}</p>
                <p className="text-md text-gray-500">{post.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CollA;
  