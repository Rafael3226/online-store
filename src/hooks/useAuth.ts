import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { errorAtom } from '../recoil/error'
import { IUser, userAtom } from '../recoil/user'

function useAuth() {
  const [executed, setExecuted] = useState<boolean>(false)
  const auth = getAuth()
  const navigate = useNavigate()
  const setError = useSetRecoilState(errorAtom)
  const [user, setUsuario] = useRecoilState(userAtom)

  function nextOrObserver(userCredential: any) {
    if (userCredential) {
      const accessToken = userCredential.accessToken
      const userData: IUser = {
        email: userCredential.email,
        accessToken,
      }
      if (user.email === '') {
        setUsuario(userData)
        navigate('/', { replace: true })
      }
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
}

export default useAuth
