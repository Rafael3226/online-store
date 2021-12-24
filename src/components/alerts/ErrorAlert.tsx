import React from 'react'
import { useRecoilValue } from 'recoil'
import { errorAtom } from '../../recoil/error'

function ErrorAlert() {
  const error = useRecoilValue<string>(errorAtom)
  if (error === '') return <></>
  return (
    <div className="mt-4" role="alert">
      <div className="bg-danger-500 text-white font-bold rounded-t px-4 py-2">
        <p>Error</p>
      </div>
      <div className="border border-t-0 border-danger-400 rounded-b bg-danger-100 px-4 py-3 text-danger-700">
        <p>{error}</p>
      </div>
    </div>
  )
}

export default ErrorAlert
