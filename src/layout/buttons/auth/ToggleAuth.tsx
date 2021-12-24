import React from 'react'
import { useLocation } from 'react-router-dom'
import GotoLogin from './GotoLogin'
import GotoSingup from './GotoSingup'
function ToggleAuth() {
  const { pathname } = useLocation()
  if (pathname === '/login') return <GotoSingup />
  return <GotoLogin />
}

export default ToggleAuth
