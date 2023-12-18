import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import ThemeSelector from '../components/ThemeSelector'
import { ThemeContext } from '../contexts/ThemeContext'
import './MainLayout.css'

function MainLayout() {
  const {mode} = useContext(ThemeContext)
  return (
    <div className={`main bg-${mode}`}>
        <Navbar /> {/* sabit kısım. */}
        <ThemeSelector />
        <div className="container">
            <Outlet /> {/* alt componentlerin geleceği değişken kısım. */}
        </div>
    </div>
  )
}

export default MainLayout