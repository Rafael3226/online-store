import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import useStorage from '../../hooks/useStorage'
import { errorAtom } from '../../recoil/error'
import { productAtom } from '../../recoil/product'
import Button from '../basic/Button'
import Label from '../basic/Label'
import ProgressBar from './ProgressBar'

const UploadImg = () => {
  const { images } = useRecoilValue(productAtom)
  const setError = useSetRecoilState(errorAtom)
  const { progress, saveFile } = useStorage()
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
        <Label htmlFor="product-images" className="">
          Images
        </Label>
        <Button
          className="mx-4 rounded-full w-auto"
          label="+"
          onClick={() => document?.getElementById('product-images')?.click()}
          type={'submit'}
        />
        <input
          id="product-images"
          type="file"
          onChange={handleChange}
          disabled={progress !== 0 || images.length === 3}
          className="text-primary-500 font-light dark:text-primary-300 invisible"
        />
      </div>
      <div>
        <ProgressBar progress={progress} />
      </div>
    </>
  )
}

export default UploadImg
