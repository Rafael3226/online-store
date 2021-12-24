import React from 'react'
import { useRecoilState } from 'recoil'
import Switch from '../../components/basic/Switch'
import { darkModeAtom } from '../../recoil/darkMode'

function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)
  function handleToggle() {
    setDarkMode(!darkMode)
  }
  return (
    <Switch
      checked={darkMode}
      onChange={handleToggle}
      labelT="🌙"
      labelF="🌞"
    />
  )
}

export default DarkModeSwitch
