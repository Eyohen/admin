import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='app'>
          <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {/* Add more sidebar menu items with corresponding routes */}
      </ul>
    </div>
  )
}

export default SideBar