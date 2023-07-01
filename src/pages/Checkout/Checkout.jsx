import React from 'react'
import './Checkout.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BsTrash } from "react-icons/bs";

function Checkout() {

  const {productId} = useParams()
  const[product, setProduct] = React.useState('')

  React.useEffect(
    ()=>{
      axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then( res =>{
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err => console.log(err))

    }, []
  
  )
  return (
    <div className='Checkout-container'>
      <div className='filter-container'>
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <div className='line-container'></div>
      <div className='chkproduct-container'>
      <img src="" alt="" />
      <p>{product.image}</p>
      <p>{product.title}</p>
      <p></p>
      <BsTrash />
      </div>
      <div className='line-container'></div>

    </div>
  )
}

export default Checkout