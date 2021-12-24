import React from 'react'
import { useSetRecoilState } from 'recoil'
import useStorage from '../../hooks/useStorage'
import { errorAtom } from '../../recoil/error'
import ErrorAlert from '../alerts/ErrorAlert'
import Label from '../basic/Label'
import ProgressBar from './ProgressBar'

const UploadForm = () => {
  const setError = useSetRecoilState(errorAtom)
  const { file, saveFile } = useStorage()

  const types = ['image/png', 'image/jpeg']

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    setError('')
    if (files && files[0]) {
      if (types.includes(files[0].type)) {
        saveFile(files[0])
      } else {
        setError('Please select an image file (png or jpg)')
      }
    }
  }
  return (
    <>
      <div>
        <input type="file" onChange={handleChange} />
        <Label>+</Label>
      </div>
      <div className="output">
        {file && <div>{file.name}</div>}
        {file && <ProgressBar />}
      </div>
      <ErrorAlert />
    </>
  )
}

export default UploadForm
