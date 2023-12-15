import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
        <Navbar /> {/* sabit kısım. */}
        <div className="container">
            <Outlet /> {/* alt componentlerin geleceği değişken kısım. */}
        </div>
    </>
  )
}

export default MainLayout