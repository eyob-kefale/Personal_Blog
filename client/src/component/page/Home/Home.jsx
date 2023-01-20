import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import './home.css'
import SideBar from '../../sideBar/sideBar'
import Posts from '../../Posts/posts'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const [posts,setPosts]=useState([])
  const {search}=useLocation()
  console.log(search)

  useEffect(()=>{
    const fetchPosts=async () =>{
      const res=await axios.get("/posts"+search)
      setPosts(res.data)
      console.log(res)
    }
    fetchPosts()
  },[search])


  return (   
    <>
    <Header/>
    <div className="home">
    <Posts posts={posts}/>
    <SideBar/>
    </div>
    </>
  )
}
