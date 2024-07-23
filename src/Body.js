import Restaurantcard, { withpromoted } from "./Restaurantcard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "./useOnlinestatus";
import UserContext from "./UserContext";

const Body = () => {
  const [listres, setlistres] = useState([])
 const [btnsearch,setbtnsearch]= useState('');
 const [filtersearch,setfiltersearch] = useState(listres);
 const Restaurantcardpromoted = withpromoted(Restaurantcard);
 const {loggedInUser}= useContext(UserContext)
 const {setuserName}=useContext(UserContext)
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json)
    // we are updation both varibale for next time 
    setlistres(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfiltersearch(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  const onlineStatus = useOnlinestatus(true);
  if (onlineStatus === false )
    {
      return (
        <h1>you are offline</h1>
      )
      
    }

  return listres.length === 0 ? <Shimmer /> : (
    <div className='bg-slate-400 m-10 p-6 rounded-3xl shadow-lg '>
        <div className="flex items-center m-2 p-2 mx-14">
      <div className="m-4 p-4">
        <input className="border border-solid items-center  p-2 m-2 border-gray-400 shadow-lg rounded-lg" 
        type="text" value={btnsearch} onChange={(e)=>{
         setbtnsearch(e.target.value)} }></input>
        {/* we have two varibale btnsearch use for value and setbtn use for onchange function */}
        
        <button className="m-2 px-4 items-center py-2 bg-slate-300 shadow-xl rounded-lg" onClick={()=>{
          const filtersearch=listres.filter((res)=>
            res?.info?.name.toLowerCase().includes(btnsearch.toLowerCase()))
        // we decalred 2 state varibale listres use for data and filtersearch is use to update data
         setfiltersearch(filtersearch);
        
  }
    } 
        >search</button>
      </div>
      <div className="m-4 p-4 flex mx-14 items-center">
        <button className="m-2 px-6 py-2 items-center  bg-slate-300 shadow-xl rounded-lg" onClick={() => {
          const flistres = listres.filter((res) => res.info.avgRating > 4)
          setfiltersearch(flistres)
          
        }}>top rated</button> <br />
      </div>
      <div>
        <label>User Name</label>
        <input className="border-black p-2 m-2" 
         value={loggedInUser} onChange={(e)=>setuserName(e.target.value)} >

        </input>
      </div>
      </div>

      <div className='flex flex-wrap mx-14'>

        {filtersearch.map(restaurant =>
        <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}>
            {(restaurant?.info?.id === "10576" ||restaurant?.info?.id === "65797" ) ? <Restaurantcardpromoted resData={restaurant} />:<Restaurantcard resData={restaurant} />}
          
          </Link>
        )}
      </div>

    </div>
  )
}
export default Body;