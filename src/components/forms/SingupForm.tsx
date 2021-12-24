import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
} from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { errorAtom } from '../../recoil/error'
import { IUser, userAtom } from '../../recoil/user'
import Button from '../basic/Button'
import Input from '../basic/Input'

function SingupForm() {
  const auth = getAuth()
  const setUsuario = useSetRecoilState(userAtom)
  const setError = useSetRecoilState(errorAtom)
  const [email, setEmail] = useState<string>('')
  const [password1, setPassword1] = useState<string>('')
  const [password2, setPassword2] = useState<string>('')
  useEffect(setDefault, [])

  async function handleSingup(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault()
    setError('')
    if (!password1 || !password2 || !email) {
      setError('Please fill in all the information')
    } else if (password1 !== password2) {
      setError('The passwords are different')
    } else {
      setPersistence(auth, browserLocalPersistence).then(() =>
        createUserWithEmailAndPassword(auth, email, password1)
          .then(async (userCredential) => {
            // Signed in
            const accessToken = await userCredential.user.getIdToken()
            const userData: IUser = {
              email: userCredential.user.email ?? '',
              accessToken,
            }
            setUsuario(userData)
          })
          .catch((error) => {
            setError(error.message)
          }),
      )
    }
  }
  function setDefault() {
    setEmail('')
    setPassword1('')
    setPassword2('')
  }
  return (
    <>
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        name="password2"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <div className="flex justify-center mt-4">
        <div className="w-1/2">
          <Button type="reset" onClick={handleSingup}>
            <span className="text-white">Singup</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default SingupForm
