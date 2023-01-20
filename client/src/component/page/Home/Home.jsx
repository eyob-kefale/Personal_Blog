import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import './home.css'
import SideBar from '../../sideBar/sideBar'
import Posts from '../../Posts/posts'
import axios from 'axios'

export default function Home() {
  const [posts,setPosts]=useState([])

  useEffect(()=>{
    const fetchPosts=async () =>{
      const res=await axios.get("/posts")
      setPosts(res.data)
      console.log(res)
    }
    fetchPosts()
  },[])


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
