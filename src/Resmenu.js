import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Rescategori from "./Rescategori";
const Resmenu = () => {
    const [resInfo, setresInfo] = useState(null);
   const [showindex, setshowindex] =useState(null)
    const{resId}=useParams();
    useEffect(() => {
        fetchMenu();
    },[])
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
        console.log(json.data,"menu") 
    }
    if (resInfo === null) {
        return <Shimmer />
    }
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR, "item")
    const categorie= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=>
        e.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    return (
        <div className="text-center ">
            <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            {categorie.map((cate,index)=>(
            <Rescategori key={cate?.card?.card.title} 
            data={cate?.card?.card}
            show={index === showindex ? true:false}
            setshowindex={()=>setshowindex(index)}
            />
            ))}
            
        </div>
    )
}
export default Resmenu;