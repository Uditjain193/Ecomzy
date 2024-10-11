import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/cartSlice"

const Product = ({post}) => {
  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();
  const addtocart=()=>{
    dispatch(add(post));
    toast.success("Item added to cart");
  }
  const removefromcart=()=>{
    dispatch(remove(post.id));
    toast.success("Item removed from cart")
  }
  return (
    <div className="flex flex-col items-center outline justify-center hover:scale-105 transition duration-300 gap-3 p-4 mt-10 ml-5 rounded-xl  ease-in hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-left text-[10px]">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div>
        <img className="h-[180px] w-full" src={post.image} alt=""/>
      </div>
      <div className="flex justify-between items-center w-full mt-5 gap-11 ">
      <div>
        <p className="text-green-600 font-semibold">${post.price}</p>
      </div>
      {
        cart.some((p)=>p.id===post.id)?
        (<button className="hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 font-semibold text-[12px] p-1 px-3 uppercase rounded-full" onClick={removefromcart}>Remove Item</button>):
        (<button className="hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 font-semibold text-[12px] p-1 px-3 uppercase rounded-full" onClick={addtocart}>Add to Cart</button>)
      }
      </div>
      
    </div>
  )
};

export default Product;
