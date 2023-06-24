import React from 'react'
import './ProductCard.css'
import {FaEuroSign} from "react-icons/fa"

function ProductCard({product}) {
  return (
    <div className='product-card'>
      <img src={product.image} />
      <p>{product.title}</p>
      <p>{product.category}</p>
      <div className='price-container'>
      <p>{product.price}</p>
      <FaEuroSign />
      </div>
    </div>
  )
}

export default ProductCard