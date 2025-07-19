import React from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material'
import styles from '../styles/ProductCard.module.css'

export default function ProductCard({ product, onRemove }) {
  return (
    <Card className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}>
      <CardContent>
        <Typography variant="h6" className={styles.productName}>
          {product.name}
        </Typography>
        <Typography variant="body1">${product.price}</Typography>
        <Typography
          variant="body2"
          className={product.inStock ? styles.inStockText : styles.outOfStockText}
        >
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          onClick={onRemove}
          style={{ marginTop: '0.5rem' }}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  )
}