import { useEffect, useState } from "react";
import Product from "../components/Product"
import Spinner from "../components/Spinner"


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setloading]=useState(false);
  const [posts,setposts]=useState([]);
  async function fetchproductdata(){
    setloading(true);
    try{
      const res=await fetch(API_URL);
      const data=await res.json();
      setposts(data);
    }
    catch(error){
      setposts([]);
    }
    setloading(false)
  }
  useEffect(()=>{
    fetchproductdata();
  },[])

  return (
    <div>
      {
        loading?<Spinner></Spinner>:posts.length>0?
        (<div className="grid md:grid-cols-3   sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto p-2 space-y-10 space-x-5 min-h-[80vh] ">
         {
           posts.map((post) => (
            <Product key={posts.id} post={post}/>
           ))
         }
        </div>):
        <div className="flex justify-center items-center">
        <p>No Data Found</p></div>
      }
    </div>
  )
};

export default Home;
