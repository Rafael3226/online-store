import React from 'react'
import Button from '../../components/basic/Button'
import { useRecoilState } from 'recoil'
import { IUser, userAtom, userDefault } from '../../recoil/user'
import { getAuth, signOut } from 'firebase/auth'

function LogOut() {
  const auth = getAuth()
  const [user, setUser] = useRecoilState<IUser>(userAtom)
  function handleLogOut() {
    signOut(auth)
    setUser(userDefault)
  }
  if (user.accessToken === '') return <></>
  return (
    <Button type="button" onClick={handleLogOut}>
      <p className="w-full text-white">Logout</p>
    </Button>
  )
}

export default LogOut
