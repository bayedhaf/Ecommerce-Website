import { useState, useEffect } from "react";
import Material2 from "./Material2";

const Material2Data = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=5");
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
      <Material2 posts={posts} />
   
    </div>
  );
};

export default Material2Data;
