import './sideBar.css'
import image1 from "../../image/job.jpg"
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function sideBar() {
    const [cats, setCat] = useState([]);

    useEffect(() => {
        const getCat = async () => {
            const res = await axios.get("/categories")
            setCat(res.data)

        }
        getCat();

    }, [])



    return (

        <div className='sideBar'>
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img
                    className='sideBarImg'
                    src={image1}
                    alt='eyob' />
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">CATAGORIES</span>
                <ul className="sideBarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className='sideBarListItem'>{c.name}</li>
                        </Link>
                    ))}

                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">FOLLOW ME</span>
                <div className="sideBarSocial">
                    <i className="sideBarIcon icon fa-brands fa-facebook"></i>
                    <i className="sideBarIcon icon fa-solid fa-envelope"></i>
                    <i className="sideBarIcon icon fa-brands fa-instagram"></i>
                    <i className="sideBarIcon icon fa-brands fa-telegram"></i>
                </div>
            </div>
        </div>

    )
}
