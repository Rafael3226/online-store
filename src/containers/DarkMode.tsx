import React from 'react'
import { useRecoilValue } from 'recoil'
import { darkModeAtom } from '../recoil/darkMode'

function DarkMode({ children }: { children: JSX.Element | JSX.Element[] }) {
  const darkModeState = useRecoilValue(darkModeAtom)
  return (
    <div className={darkModeState ? 'dark' : ''}>
      <div className="w-screen h-full min-h-screen bg-white dark:bg-black">
        {children}
      </div>
    </div>
  )
}

export default DarkMode
