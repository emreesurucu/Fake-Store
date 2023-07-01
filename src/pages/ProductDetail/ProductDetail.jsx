import React from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import axios from 'axios'
import {FaEuroSign} from "react-icons/fa"

function ProductDetail() {
  
  const {productId} = useParams()
  const[product, setProduct] = React.useState('')

    React.useEffect(
        ()=>{
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res =>{
                setProduct(res.data)
            })
            
            .catch(err => console.log(err))


      }
    )
  return (
    <div className='details-container'>
      <div className='container-info'>
      <img src={product.image}/>
      <div className='right-info'>
      <p>{product.title}</p>
      <div className='price-container'>
      <p>{product.price}</p>
      <FaEuroSign />
      </div>
      <p>Description</p>
      <p>{product.description}</p>
      <a href="#">Add to Cart</a>
      </div>
      </div>
    </div>
  )
}

export default ProductDetail