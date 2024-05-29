import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Foote from './components/Foote'


function App() {
  

  return (
    <>
    <Navbar />
    <Outlet  />
    <Foote />
    </>
  )
}

export default App
