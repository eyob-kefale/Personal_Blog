import {Routes, Route } from "react-router-dom"
import './App.css';
import TopBar from "./component/topBar/topBar"
import Write from './component/page/Write/write';
import Home from './component/page/Home/Home'
import Single from './component/page/Single/single'
import Settings from './component/page/Setting/settings'
import Register from './component/page/Register/register'
import Login from './component/page/Login/login'

function App() {
  const user=true
  return (
    <div className="App">
      <Routes>
        <Route element={<TopBar/>}>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={user ?<Write/>:<Register/>} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/register"
          element={user ?<Home/>:<Register/>}/>
          <Route path="/settings" element={user ?<Settings/>:<Register/>} />
          <Route path="/login" element={user ?<Home/>:<Login/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
