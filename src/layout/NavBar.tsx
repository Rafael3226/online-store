import React from 'react'
import ToggleAuth from './buttons/auth/ToggleAuth'
import DarkModeSwitch from './buttons/DarkModeSwitch'
import LogOut from './buttons/LogOut'
import NavLink from '../components/basic/NavLink'
import useAuth from '../hooks/useAuth'

function NavBar() {
  useAuth()
  return (
    <ul className="flex justify-between py-2 px-2">
      <div className="flex content-center gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product/list">Products</NavLink>
      </div>
      <div className="flex content-center items-end gap-4">
        <DarkModeSwitch />
        <LogOut />
        <ToggleAuth />
      </div>
    </ul>
  )
}

export default NavBar
