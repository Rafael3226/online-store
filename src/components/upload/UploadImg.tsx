import React, { useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { saveFile } from '../../db/storage'
import { errorAtom } from '../../recoil/error'
import { IProduct, productAtom } from '../../recoil/product'
import Button from '../basic/Button'
import Label from '../basic/Label'

const UploadImg = () => {
  const [product, setProduct] = useRecoilState(productAtom)
  const setError = useSetRecoilState(errorAtom)
  const [loading, setLoading] = useState(false)
  const types = ['image/png', 'image/jpeg']

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    setError('')
    if (files && files[0]) {
      const file = files[0]
      if (types.includes(file.type)) {
        setLoading(true)
        saveFile(file)
          .then((url) => {
            setProduct((p: IProduct) => {
              const images = [url]
              p.images.forEach((link) => {
                images.push(link)
              })
              return { ...p, images }
            })
          })
          .catch((e) => {
            setError(e.message)
          })
          .finally(() => setLoading(false))
        // working
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
          disabled={product.images.length >= 3}
        />
        <input
          id="product-images"
          type="file"
          onChange={handleChange}
          disabled={product.images.length >= 3}
          className="text-primary-500 font-light dark:text-primary-300 invisible"
        />
      </div>
      {loading && <Label>loading...</Label>}
    </>
  )
}

export default UploadImg
