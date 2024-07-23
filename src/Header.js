import { useContext, useState } from "react";
import { LOGO_URL } from "./constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "./useOnlinestatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btn, setbtn] = useState('Login')
    const onlineStat = useOnlinestatus(true);
    const {loggedInUser} = useContext(UserContext);
    const cartItem= useSelector((store)=>store.cart.items)
    
    return (
        <div className='flex justify-between bg-slate-200 shadow-2xl m-2 p-2 mb-4 sm:bg-slate-400 rounded-lg' >
            <div >
                <img className='w-32 rounded-lg' alt='main-logo'
                    src={LOGO_URL}></img>
            </div>
            <div className='flex items-center m-2 p-2 '>
                <ul className="flex m-4 p-4">
                    <li className="px-4">  Status{onlineStat === true ? "🟢" : " 🔴 "}</li>
                    <li className="px-4"> <Link to='/'>Home</Link></li>
                    <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
                    <li className="px-4"><Link to='/about'>About</Link></li>
                    <li className="px-4"><Link to='/groceryitems'>Grocery</Link></li>
                    <li className="px-4"><Link to='/cart'>cart🛍️{cartItem.length}</Link></li>

                    <li>  <button className=" bg-slate-300 shadow-xl rounded-lg mx-10 p-2 items-center" onClick={() => {
                        btn === 'logout' ? setbtn('login') : setbtn('logout')
                    }} >{btn}</button>
                    </li>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;