import React from 'react'
import ProductsForm from '../components/forms/ProductsForm'
import DarkMode from '../containers/DarkMode'
import ResponsiveCenter from '../containers/ResponsiveCenter'
import NavBar from '../layout/NavBar'

function ProductsPage() {
  return (
    <>
      <DarkMode>
        <NavBar />
        <ResponsiveCenter>
          <ProductsForm />
        </ResponsiveCenter>
      </DarkMode>
    </>
  )
}

export default ProductsPage
