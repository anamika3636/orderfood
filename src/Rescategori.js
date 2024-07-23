import { useState } from "react";
import Itemcards from "./Itemcards";

const Rescategori =({data,show,setshowindex})=>{
   const handleclickmenu = () =>{
    setshowindex();
   }
    return(
        <div className="">
          <div className="w-6/12 m-auto my-4 bg-gray-300 shadow-lg p-4 " >
            <div className="justify-between flex"onClick={handleclickmenu}>
            <span className=" font-bold text-lg cursor-pointer" > 
            {data?.title}</span>
            <span>🔽</span>
            </div>
           
           {show && <Itemcards items={data?.itemCards}/>}
           
          </div>
        </div>
    );
}
export default Rescategori;