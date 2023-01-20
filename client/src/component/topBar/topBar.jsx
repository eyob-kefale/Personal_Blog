import React from 'react'
import { Outlet, Link } from "react-router-dom"
import './topBar.css'
import image1 from "../../image/job.jpg"
export default function topBar() {
  const user=true
  return (
    <>
      <div className="topBar">
        <div className="left">
          <i className="topIcon icon fa-brands fa-facebook"></i>
          <i className="topIcon icon fa-solid fa-envelope"></i>
          <i className="topIcon icon fa-brands fa-instagram"></i>
          <i className="topIcon icon fa-brands fa-telegram"></i>
        </div>
        <div className="center">
          <ul className="topList">
            <li className="topListItem"><Link className='link' to='/' >  Home</Link></li>
            <li className="topListItem"><Link className='link' to='/'> About</Link></li>
            <li className="topListItem"><Link className='link' to='/'> Contact</Link></li>
            <li className="topListItem"><Link className='link' to='/write'>Write</Link></li>
            <li className="topListItem">{user &&"LogOut"}</li>
          </ul>
        </div>
        <div className="right">
       { 
       user?(
         <img
         className='topImg'
         src={image1}
         alt='job' />):
              (
                <ul className='topList'>
                  <li className="topListItem"> <Link className='link' to='/login'>LOGIN</Link></li>
                  <li className="topListItem"><Link className='link' to='/register'>REGISTER</Link></li>
              </ul>
              )
              }
        
          <i className="topSearchItem fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <Outlet />
    </>
  )
}
