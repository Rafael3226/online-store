import React from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../../../recoil/user'
import GotoLogin from './GotoLogin'
import GotoSingup from './GotoSingup'
function ToggleAuth() {
  const user = useRecoilValue(userAtom)
  const { pathname } = useLocation()

  if (user.email !== '') return <></>
  if (pathname === '/login') return <GotoSingup />
  return <GotoLogin />
}

export default ToggleAuth
