import React, { useState } from 'react'
import ProductList from './components/ProductList'

const sampleProducts = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Phone', price: 699, inStock: false },
  { id: 3, name: 'Tablet', price: 499, inStock: true },
]

export default function App() {
  const [products, setProducts] = useState(sampleProducts)

  // Remove product handler
  function handleRemoveProduct(id) {
    setProducts(prev => prev.filter(product => product.id !== id))
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px' }}>
      <h1 style={{ color: 'white' }}>Product Dashboard</h1>
      <ProductList products={products} onRemove={handleRemoveProduct} />
    </div>
  )
}