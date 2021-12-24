import React, { useEffect, useState } from 'react'
import FsCollection from '../../db/firestore'
import { IProduct } from '../../recoil/product'
import CardHorisontal from '../basic/CardHorisontal'
import Label from '../basic/Label'

function ProductsForm() {
  const [products, setProducts] = useState<any>()
  useEffect((): void => {
    const fsCollection = new FsCollection('products')
    fsCollection.getAllDocuments().then((res) => {
      setProducts(res)
    })
  }, [])
  return (
    <div className="w-full justify-center">
      {products &&
        products.map((product: IProduct) => (
          <CardHorisontal
            key={product.id}
            name={product.name}
            imgURL={product.images[0]}
            description={product.description}
            onClick={() => {}}
          />
        ))}
    </div>
  )
}

export default ProductsForm
