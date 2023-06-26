import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import SideBar from './SideBar';
import Users from './Users';
import LayOut from './LayOut';

const App = () => {
  return (
   <Routes>
    
      {/* <SideBar></SideBar> */}
     <Route path='/' element={<LayOut/>}>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/users' element={<Users/>}/>
     </Route>
     
    
    {/* <Route path='' element={<Dashboard/>}/> */}
  
   
   </Routes>
  )
}

export default App