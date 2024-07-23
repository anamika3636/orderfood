import { CND_URL } from "./constants";
const Restaurantcard =(props)=>{
    const {resData}=props;
  return(
    <div className="m-4 p-4 flex dark:md:hover:bg-slate-200">
    <div className='m-4 p-4 w-[300px] h-[400px] border border-solid shadow-xl rounded-lg'>
      <img className='rounded-lg shadow-lg' alt="logo"
      src={CND_URL + resData.info?.cloudinaryImageId}/>
      <h3 className="font-bold">{resData.info?.name}</h3>
      {/* <h4 className="">{resData?.info?.cuisines.join(',')}</h4> */}
      <h4>{resData.info?.avgRating}</h4>
      </div>
    </div>
  )
  }
 export const withpromoted = (Restaurantcard)=>{
    return (props)=>{
        return( 
        <div>
            <lable className='bg-white m-2 p-2 
            '>promoted</lable>
            <Restaurantcard {...props}/>
        </div>)
       
    }
  }
  export default Restaurantcard;