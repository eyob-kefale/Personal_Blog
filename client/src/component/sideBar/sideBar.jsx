import './sideBar.css'
import image1 from "../../image/job.jpg"


export default function sideBar() {
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
                    <li className='sideBarListItem'>Life</li>
                    <li className='sideBarListItem'>Style</li>
                    <li className='sideBarListItem'>sport</li>
                    <li className='sideBarListItem'>peace</li>
                    <li className='sideBarListItem'>Love</li>
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
