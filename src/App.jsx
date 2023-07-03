import React,{useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import SideBar from './SideBar';
import Users from './Users';
import LayOut from './LayOut';
import { Link } from 'react-router-dom';
import App2 from './App2';

// const App = () => {
//   return (
//    <Routes>
    
//       {/* <SideBar></SideBar> */}
//      <Route path='/' element={<LayOut/>}>
//      <Route path='/dashboard' element={<Dashboard/>}/>
//      <Route path='/users' element={<Users/>}/>
//      </Route>
     
    
//     {/* <Route path='' element={<Dashboard/>}/> */}
  
   
//    </Routes>
//   )
// }
const App = () => {
  const [ishidden, setIsHidden] = useState(false)
  const toggleMenu = () => {
    setIsHidden(!ishidden);
  };
  return (
    <div>
      <App2/>
    </div>
//     <div className='grid md:grid-cols-3'>
//      <div className='md:col-span-1 md:flex md:justify-end'>
//       <nav className='text-right'>
//         <div className='flex justify-between items-center'>
//           <h1 className='font-bold text-gray-500 p-10'>
//             <Link to='/' className='hover:text-green-600'>Food Ninja</Link>
//           </h1>
//           <div className='px-4 cursor-pointer md:hidden' onClick={toggleMenu}>
//           <svg className='w-6' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path>
// </svg>
//           </div>
//         </div>
//  <ul className={ishidden ? 'hidden text-sm md:block' : 'null'  }>
//         <li className='text-gray-700 font-bold py-1' >
//             <Link to='#' className='flex justify-center pb-4 border-r-4 border-red-400'>
//             <svg className='w-5' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
// </svg>
//               <span className='ml-2'>Home</span>
//             </Link>
//           </li>
//           <li >
//             <Link to='#'  className='flex justify-center pb-4 border-r-4 border-white'>
//             <svg className='w-5' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
// </svg>
//               <span className='ml-2 '>About</span>
//             </Link>
//           </li>
//           <li>
//             <Link to='#'  className='flex justify-center pb-4 border-r-4 border-white'>
//             <svg className='w-5' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"></path>
// </svg>
//               <span className='ml-2'>Contact</span>
//             </Link>
//           </li>
//         </ul>

//       </nav>
//      </div>



//     <main className='px-16 py-10 bg-gray-100 md:col-span-2'>
//       <div className='flex justify-center md:justify-end text-red-400' >
//         <Link to="" className='btn border-red-300 md:border-2 hover:bg-red-300 hover:text-white'>Log in</Link>
//         <Link to="" className='btn border-red-300 md:border-2 ml-2 hover:bg-red-300 hover:text-white'>Sign Up</Link>
//       </div>
//       <header>
//         <h2 className='text-green-700 text-lg'>Recipes</h2>
//         <h3>For Ninjas</h3>
//       </header>

//       <div>
//         <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>

//         <div className='mt-8 grid lg:grid-cols-3 gap-10'>
//           {/* cards go here */}
//           <div className='card hover:shadow-lg'>
//             <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80" alt="" className='w-full h-32 object-cover' />
           
//             <div className='m-4'>
//                 <span className='font-bold'>Fruit Toast</span>
//                 <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
//               </div>
//               <div className='badge'>
//               <svg className='w-5 inline-block' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
// </svg>
//                 <span >25 mins</span>
//               </div>
//           </div>

//           <div className='card hover:shadow-lg'>
//             <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" className='w-full h-32 object-cover' />
           
//             <div className='m-4'>
//                 <span className='font-bold'>Grilled Salmon</span>
//                 <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
//               </div>
//               <div className='badge'>
//               <svg className='w-5 inline-block' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
// </svg>
//                 <span >25 mins</span>
//               </div>
//           </div>

//           <div className='card hover:shadow-lg'>
//             <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80" alt="" className='w-full h-32 object-cover' />
           
//             <div className='m-4'>
//                 <span className='font-bold'>Chicken Pizza</span>
//                 <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
//               </div>
//               <div className='badge'>
//               <svg className='w-5 inline-block' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
// </svg>
//                 <span >25 mins</span>
//               </div>
//           </div>
//         </div>

//         <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>


//       <div className='mt-8'>
//           {/* cards go here */}
//       </div>

//       <div className='flex justify-center'>
//         <div className='btn bg-orange-200  text-orange-500 hover:shadow-inner'>Load more</div>
//       </div>


//     </div>



//     </main>



//     </div>
   
  )
}


export default App