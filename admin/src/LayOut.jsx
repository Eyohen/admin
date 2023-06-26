import React from 'react'
import SideBar from './SideBar'
import {Outlet} from 'react-router-dom'

const LayOut = () => {
  return (
    <div>
        <SideBar></SideBar>
        <>
        <Outlet/>
        </>
    </div>
  )
}

export default LayOut