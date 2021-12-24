import React from 'react'
import ProductForm from '../components/forms/ProductForm'
import DarkMode from '../containers/DarkMode'
import ResponsiveCenter from '../containers/ResponsiveCenter'
import NavBar from '../layout/NavBar'

function ProductPage() {
  return (
    <>
      <NavBar />
      <DarkMode>
        <ResponsiveCenter>
          <ProductForm />
        </ResponsiveCenter>
      </DarkMode>
    </>
  )
}

export default ProductPage
