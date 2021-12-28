import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { errorAtom } from '../../recoil/error'
import { loadingAtom } from '../../recoil/loading'
import Button from '../basic/Button'
import Input from '../basic/Input'

function LoginForm() {
  const auth = getAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const setError = useSetRecoilState(errorAtom)
  const setLoading = useSetRecoilState(loadingAtom)
  useEffect(setDefault, [])

  function handleLogin(evt: React.MouseEvent<HTMLButtonElement>) {
    if (!password || !email) {
      setError('Please fill in all the information')
    } else {
      setError('')
      setLoading(true)
      setPersistence(auth, browserLocalPersistence).then(() =>
        signInWithEmailAndPassword(auth, email, password)
          .catch((error: { message: string }) => {
            console.error(error)
            setError(error.message)
          })
          .finally(() => {
            setLoading(false)
          }),
      )
    }
  }
  function setDefault() {
    setEmail('')
    setPassword('')
  }
  return (
    <>
      <Input
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex justify-center mt-4">
        <div className="w-1/2">
          <Button className="w-full" type="button" onClick={handleLogin}>
            <span className="text-white">Log in</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default LoginForm
