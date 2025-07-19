import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ products, onRemove }) {
  return (
    <>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onRemove={() => onRemove(product.id)}
          />
        ))
      )}
    </>
  )
}