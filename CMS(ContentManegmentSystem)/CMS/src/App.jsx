import React from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './Page/Home/Home';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
function App() {
  return (
    <div className="flex">
        <LeftSideBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App