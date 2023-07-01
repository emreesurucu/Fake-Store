import React from 'react'
import './ProductCard.css'
import {FaEuroSign} from "react-icons/fa"

function ProductCard({product}) {
  return (
    <div className='product-card'>
      <img src={product.image} />
      <a href={`/Product-detail/${product.id}`}>{product.title}</a>
      <p>{product.category}</p>
      <div className='price-container'>
      <p>{product.price}</p>
      <FaEuroSign />
      </div>
    </div>
  )
}

export default ProductCard