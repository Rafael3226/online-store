import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import FsCollection from '../../db/firestore'
import { errorAtom } from '../../recoil/error'
import { loadingAtom } from '../../recoil/loading'
import { IProduct, productAtom } from '../../recoil/product'
import ErrorAlert from '../alerts/ErrorAlert'
import Button from '../basic/Button'
import Input from '../basic/Input'
import Label from '../basic/Label'
import TextArea from '../basic/TextArea'
import DisplayImg from '../upload/DisplayImg'
import UploadImg from '../upload/UploadImg'

function ProductForm() {
  const navigate = useNavigate()

  const product = useRecoilValue<IProduct>(productAtom)
  const setError = useSetRecoilState<string>(errorAtom)
  const setLoading = useSetRecoilState(loadingAtom)

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    setId(product.id)
    setName(product.name)
    setPrice(product.price)
    setDescription(product.description)
    setImages(product.images)
  }, [product])

  function handleSave() {
    setLoading(true)
    const collection = new FsCollection('products')
    collection
      .saveDocument({ name, price, description, images })
      .then(() => navigate('/products', { replace: true }))
      .then(() => alert('The product has been saved successfully'))
      .catch((e) => {
        setError(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  function handleUpdate() {
    setLoading(true)
    const collection = new FsCollection('products')
    collection
      .updateDocument(id, { name, price, description, images })
      .then(() => {
        alert('The product has been saved successfully')
      })
      .then(() => navigate('/products', { replace: true }))
      .catch((e) => {
        setError(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  function handleDelete() {
    setLoading(true)
    const collection = new FsCollection('products')
    collection
      .deleteDocument(id)
      .then(() => {
        alert('The product has been deleted successfully')
      })
      .then(() => navigate('/products', { replace: true }))
      .catch((e) => {
        setError(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <>
      <div className="mb-8 flex justify-center">
        <Label className="text-4xl">
          {id === '' ? 'Create Product' : 'Product Update'}
        </Label>
      </div>
      <Input
        label="Name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <Input
        label="Price"
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <TextArea
        label="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <UploadImg />
      <DisplayImg list={images} />
      <div className="flex justify-center mt-4 gap-4">
        {id === '' ? (
          <Button
            label="Save"
            type="button"
            onClick={() => handleSave()}
            className="w-24"
          />
        ) : (
          <>
            <Button
              label="Update"
              type="button"
              onClick={() => handleUpdate()}
              className="w-24"
            />
            <Button
              label="Delete"
              type="button"
              onClick={() => handleDelete()}
              className="w-24"
            />
          </>
        )}
      </div>
      <ErrorAlert />
    </>
  )
}

export default ProductForm
