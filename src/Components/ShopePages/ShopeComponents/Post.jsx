

const Post = ({postdata}) => {
    return (
<div className="grid mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
 
  <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg" >
    <span className="">{postdata.id}</span>
    <img src={postdata.image} alt="" className="w-full h-auto rounded-lg mb-4"  />
    <span className="text-center text-lg font-semibold bg-gray-200 p-4 rounded-lg mb-2">{postdata.description}</span>
    <span className="text-center bg-gray-200 p-4 rounded-lg">{postdata.price}</span>
   
  </div>

  <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg">
    <span className="">{postdata.id}</span> 
    <img src={postdata.image} alt="" className="w-full h-auto rounded-lg mb-4" />
    <span className="text-center text-lg font-semibold bg-gray-200 p-4 rounded-lg mb-2">{postdata.description}</span>
    <span className="text-center bg-gray-200 p-4 rounded-lg">{postdata.price}</span>
  </div>


  <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg">
  <span className="">{postdata.id}</span>
    <img src={postdata.image} alt="" className="w-full h-auto rounded-lg mb-4" />
    <span className="text-center text-lg font-semibold bg-gray-200 p-4 rounded-lg mb-2">{postdata.description}</span>
    <span className="text-center bg-gray-200 p-4 rounded-lg">{postdata.price}</span>
  </div>

 
  <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg">
   <span className="">{postdata.id}</span>
    <img src={postdata.image} alt="" className="w-full h-auto rounded-lg mb-4" />
    <span className="text-center text-lg font-semibold bg-gray-200 p-4 rounded-lg mb-2">{postdata.description}</span>
    <span className="text-center bg-gray-200 p-4 rounded-lg">{postdata.price}</span>
  </div>
</div>

          
       
    );
};

export default Post;