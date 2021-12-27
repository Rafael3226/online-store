import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import FsCollection from '../../db/firestore'
import { IProduct, productAtom, productDefault } from '../../recoil/product'
import Button from '../basic/Button'
import CardHorisontal from '../basic/CardHorisontal'
import Label from '../basic/Label'

function ProductsForm() {
  const [products, setProducts] = useState<IProduct[]>()
  const setProduct = useSetRecoilState<IProduct>(productAtom)
  const navigate = useNavigate()
  useEffect((): void => {
    const fsCollection = new FsCollection('products')
    fsCollection.getAllDocuments().then((res) => {
      setProducts(res)
    })
  }, [])
  function handleAdd() {
    setProduct(productDefault)
    navigate('/product', { replace: true })
  }
  function handleProduct(product: IProduct) {
    setProduct(product)
    navigate('/product', { replace: true })
  }
  return (
    <>
      <div className="mb-8 flex justify-center">
        <Label className="text-4xl">Product List</Label>
        <Button
          label="Add"
          className="mx-2 w-auto rounded-full"
          onClick={() => handleAdd()}
          type="button"
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-3/4 grid grid-cols-1">
          {products &&
            products.map((product: IProduct) => (
              <CardHorisontal
                key={product.id}
                name={product.name}
                price={product.price}
                imgURL={product.images[0]}
                description={product.description}
                onClick={() => handleProduct(product)}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default ProductsForm
