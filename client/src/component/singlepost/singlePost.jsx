import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './singlePost.css'



export default function singlePost() {
  const location=useLocation();
  const path=location.pathname.split("/")[2];
  const [post, setPost]=useState({})


  useEffect(()=>{
    const getPost=async()=>{
      const res=await axios.get("/posts/"+path)
     setPost(res.data);
     console.log(res.data)
    }
    getPost()
  },[path]);




  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
        {post.photo &&(
          <img
                  className='singlePostImg'
                  src={post.photo}
                  alt='React'
              />
        ) }

          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
          </h1>
       
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: 
          <Link to={`/?user=${post.userName}`} className="link">
          <b>{post.userName}</b>
          </Link>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='singlePostDesc'>
          {post.desc}
        </p>
        </div>
        </div>
  )
}
