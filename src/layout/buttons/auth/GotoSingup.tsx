import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import Button from '../../../components/basic/Button'
import { errorAtom } from '../../../recoil/error'

function GotoSingup() {
  const navigate = useNavigate()
  const setError = useSetRecoilState(errorAtom)
  function handleClick() {
    setError('')
    navigate('/singup', { replace: true })
  }
  return (
    <Button type="button" onClick={handleClick}>
      <span className="text-white">Singup</span>
    </Button>
  )
}

export default GotoSingup
