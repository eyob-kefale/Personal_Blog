import './single.css'
import SideBar from '../../sideBar/sideBar'
import SinglePost from '../../singlepost/singlePost'

export default function single() {
  return (
    <div className='single'>
       <SinglePost/>
        <SideBar/>
    </div>
  )
}
