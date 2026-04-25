import React,{useState} from 'react'
import Sidebar from "./Sidebar.jsx"
import Feed from "./Feed.jsx"
import Widgets from "./Widgets.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
const App = () => {
  const [dark, setDark] = useState(false)
  return (
    <BrowserRouter>
      <div className={dark ? "app dark" : "app"}>

        <button 
          onClick={()=>setDark(!dark)} 
<<<<<<< HEAD
          style={{position:"fixed",top:10,right:10}}
        >
          Toggle
=======
          style={{position:"fixed",top:10,right:10,zIndex: 999}}
          className='toggle_button'
        >
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
>>>>>>> 6224b7b (Final push code improvement)
        </button>

        <Sidebar/>

        <Routes>
          <Route path="/" element={<Feed/>}/>
          <Route path="/profile" element={<h2>Profile Page</h2>}/>
        </Routes>

        <Widgets/>

      </div>
    </BrowserRouter>
  )
}

export default App