import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RequireAuth from './containers/RequireAuth'
import DefaultPage from './pages/DefaultPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import ProductsPage from './pages/ProductsPage'
import SingupPage from './pages/SingupPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="singup" element={<SingupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            index
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path="product"
            element={
              <RequireAuth>
                <ProductPage />
              </RequireAuth>
            }
          />
          <Route
            path="products"
            element={
              <RequireAuth>
                <ProductsPage />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  )
}
