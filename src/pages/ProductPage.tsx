import React from 'react'
import ProductForm from '../components/forms/ProductForm'
import Container from '../containers/Container'
import DarkMode from '../containers/DarkMode'
import NavBar from '../layout/NavBar'

function ProductPage() {
  return (
    <>
      <NavBar />
      <DarkMode>
        <Container>
          <ProductForm />
        </Container>
      </DarkMode>
    </>
  )
}

export default ProductPage
