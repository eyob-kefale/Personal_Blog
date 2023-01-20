import './settings.css'
import SideBar from '../../sideBar/sideBar'

export default function setting() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Upadate Your Acount</span>
          <span className="settingsDeleteTitle"> Delete Account</span>
        </div>
        <form className="settingsForm">
          <label >Profile Picture</label>
          <div className="settingsPP">
            <img
              src='https://media.istockphoto.com/id/519162052/photo/fast-coding.jpg?s=612x612&w=0&k=20&c=GQYnIlkFJve_XQlRjZX5klclnJuwZ-6esZwuLQkqcGQ='
              alt='React'
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id='fileInput' style={{ display: "none" }} />
          </div>
          <label >UserName</label>
          <input type="text" placeholder='job' />
          <label >Email</label>
          <input type="email" placeholder='job@gmail.com' />
          <label >Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar/>
    </div>
  )
}
