import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { errorAtom } from '../recoil/error'
import { IUser, userAtom } from '../recoil/user'

function useAuth() {
  const [executed, setExecuted] = useState<boolean>(false)
  const auth = getAuth()
  const navigate = useNavigate()
  const setError = useSetRecoilState(errorAtom)
  const setUsuario = useSetRecoilState(userAtom)

  function nextOrObserver(userCredential: any) {
    if (userCredential) {
      const accessToken = userCredential.accessToken
      const userData: IUser = {
        email: userCredential.email,
        accessToken,
      }
      setUsuario(userData)
      navigate('/', { replace: true })
    }
  }
  function onError(error: { message: any }) {
    console.error(error)
    setError('Auth Error ')
  }
  if (!executed) {
    setExecuted(true)
    onAuthStateChanged(auth, nextOrObserver, onError)
  }

  console.log('useAuth')
}

export default useAuth
