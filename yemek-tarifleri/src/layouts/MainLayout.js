import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import ThemeSelector from '../components/ThemeSelector'

function MainLayout() {
  return (
    <>
        <Navbar /> {/* sabit kısım. */}
        <ThemeSelector />
        <div className="container">
            <Outlet /> {/* alt componentlerin geleceği değişken kısım. */}
        </div>
    </>
  )
}

export default MainLayout