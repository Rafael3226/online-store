import React from 'react'
import ProductsForm from '../components/forms/ProductsForm'
import Container from '../containers/Container'
import DarkMode from '../containers/DarkMode'
import NavBar from '../layout/NavBar'

function ProductsPage() {
  return (
    <>
      <DarkMode>
        <NavBar />
        <Container>
          <ProductsForm />
        </Container>
      </DarkMode>
    </>
  )
}

export default ProductsPage
