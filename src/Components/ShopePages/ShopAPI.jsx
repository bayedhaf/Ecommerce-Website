import Post from "./ShopeComponents/Post";
import { useState,useEffect } from "react";

//post API 

const ShopAPI = () => {
    const [Posts, setPostdata] = useState([]);
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);
  
    // Fetch data from backend when component mounts
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products?limit=12'); 
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setPostdata(data); 
        } catch (error) {
          setError(error.message); 
        } finally {
          setLoading(false); 
        }
      };
  
      fetchData(); 
    }, []); 
  
   
    if (loading) {
      return <div>Loading...</div>;
    }
  

    if (error) {
      return <div>Error: {error}</div>;
    }
    return (
        <div>
            <Post   Posts={Posts}/>
        </div>
    );
};

export default ShopAPI;