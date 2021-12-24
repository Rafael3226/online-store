import React from 'react'
import { Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../recoil/user'

function RequireAuth({ children }: { children: JSX.Element }) {
  const usuario = useRecoilValue(userAtom)

  if (usuario.accessToken === '') {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" />
  }

  return children
}

export default RequireAuth
