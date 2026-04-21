import React from 'react'
import Sidebar from "./Sidebar.jsx"
import Feed from "./Feed.jsx"
import Widgets from "./Widgets.jsx"
import "./App.css"
const App = () => {
  return (
    <div className="app">
   
      <Sidebar/>

      <Feed/>

      <Widgets/>
    </div>
  )
}

export default App
