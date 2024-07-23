import { useDispatch } from "react-redux";
import { CND_URL } from "./constants";
import { additems } from "./cartSlice";
import { clearItem } from "./cartSlice";
const Itemcards =({items})=>{
    const dispatch = useDispatch();
    const handleadditem=(item)=>{
      dispatch(additems(item))
    }
   
    return(
        <div className="">
            {items.map((item)=>(
                <div key={item?.card?.info?.id}
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
                > 
                <img className="w-20 h-20" src={CND_URL + item.card?.info?.imageId}></img>
                <div>
                <div className="p-2 m-2">
                    <span>{item.card?.info?.name}</span>
                    <span>   {"💶"}  Rs{item.card?.info?.price ? 
                    item.card?.info?.price/100 : item.card?.info?.defaultPrice/100}</span>
                </div>
                <p className="text-sm m-2">{item.card?.info?.description}</p>
                </div>
                <button className="bg-white m-auto p-2 py-1 shadow-2xl rounded-2xl" onClick={()=>handleadditem(item)}> Add+</button>
           
                </div>
            ))}
        </div>
    )
}
export default Itemcards;