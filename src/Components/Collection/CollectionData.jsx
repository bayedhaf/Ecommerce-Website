import { useEffect,useState } from "react";
import CollA from "../CollA";
const CollectionData = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
     
      const fetchData = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products?limit=15");
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []); 
  
    return (
      <div>
     

        <CollA posts={posts}/>
      </div>
    );
};

export default CollectionData;