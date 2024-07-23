import Contact from './Contact';
import Header from './Header'
import Body from './Body';
import './App.css';
import {createBrowserRouter,Outlet} from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react';
import Resmenu from './Resmenu';
import Error from './Error';
import UserContext from './UserContext';
import {Provider} from 'react-redux'
import appStore from './appStore';
import Cartitem from './Cartitem';
 
const Groceryitems = lazy(()=> import('./Groceryitems'))
const About = lazy(()=> import('./About'))

const Applayout =()=>{
  const [userName,setuserName] = useState();

useEffect(()=>{
  const user ={
    name: "anamika"
  }
  setuserName(user.name)
},[])
  return(
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName,setuserName}}>
  <div className='app'>
  <Header/>
  <Outlet/>
</div>
</UserContext.Provider>
</Provider>
  )

} 
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
       {
    path:"/",
    element:<Body/>,
    
  },
      {
    path:"/about",
    element:<Suspense fallback={<h1>loading....</h1>}><About/></Suspense>,
    
  },{
    path:"/contact",
    element:<Contact/>,

  },
  {
    path:"/groceryitems",
    element:<Suspense fallback={<h1>loading.....</h1>}><Groceryitems/></Suspense>,

  },
  
  {
    path:"/restaurants/:resId",
    element:<Resmenu/>,
  },
  {
    path:"/cart",
    element:<Cartitem/>
  }

    ],

    errorElement:<Error/>
  },
  
])

export default appRouter;
