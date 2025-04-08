const Post = ({ Posts }) => {
  return (
    <div className="snap-x grid mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Posts.map((post) => (
        <div key={post.id} className="flex flex-col bg-white p-4 rounded-lg shadow-lg">
          <span>{post.id}</span>
          <img
            src={post.image}
            alt="Post Image"
            className="w-full h-auto rounded-lg mb-4 hover:w-auto"
          />
          <span className="text-center text-lg font-semibold bg-gray-200 p-4 rounded-lg mb-2">
            {post.description}
          </span>
          <span className="text-center bg-gray-200 p-4 rounded-lg">
            {post.price}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Post;
