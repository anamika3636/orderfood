import { useDispatch, useSelector } from "react-redux";
import Itemcards from "./Itemcards";
import { clearItem } from "./cartSlice";
const Cartitem =()=>{
     const dispatch = useDispatch()
    const cartitem= useSelector((store)=>store.cart.items)
    const haandleclear =()=>{
     dispatch(clearItem())
    }
    return(
        <div className="text-center m-4 p-4 text-2xl">
            <h1 className="text-2xl font-bold">  Cart</h1>
              <div>
              <div>
                <button className=" bg-slate-400 border-black m-2 p-2 rounded-lg" onClick={haandleclear}>  Clear</button>
              </div>

            <Itemcards items={cartitem}></Itemcards>
            </div>
          
        </div>
    )
}
export default Cartitem;