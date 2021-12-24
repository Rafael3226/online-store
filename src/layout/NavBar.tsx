import React from 'react'
import ToggleAuth from './buttons/auth/ToggleAuth'
import DarkModeSwitch from './buttons/DarkModeSwitch'
import LogOut from './buttons/LogOut'
import useAuth from '../hooks/useAuth'
import NavLinks from './NavLinks'

function NavBar() {
  useAuth()
  return (
    <div>
      <ul className="flex justify-between py-2 px-2">
        <div className="flex content-center gap-4 ">
          <NavLinks />
        </div>
        <div className="flex content-center items-end gap-4">
          <DarkModeSwitch />
          <LogOut />
          <ToggleAuth />
        </div>
      </ul>
    </div>
  )
}

export default NavBar
