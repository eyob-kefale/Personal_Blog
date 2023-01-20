import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>

        </div>
        <img
        className='headerImg'
        src='https://media.istockphoto.com/id/1403854100/photo/abstract-cloudy-background-beautiful-natural-streaks-of-sky-and-clouds-beautiful-natural.jpg?s=612x612&w=0&k=20&c=VkKUfGYa5jUrtJXaPNJiSyJ2K5o1UAHjUh3TC8rJ3mQ='
        alt='image1'
        />

    </div>
  )
}
