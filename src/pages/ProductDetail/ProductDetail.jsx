import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import axios from 'axios'
import {FaEuroSign} from "react-icons/fa"
import { CartContext } from '../../contexts/CartContext'



function ProductDetail() {

  const {cart, addProduct, removeProduct} = useContext(CartContext)
  
  const {productId} = useParams()
  const[product, setProduct] = React.useState('')
  const [inCart, setInCart] = React.useState(false)

    React.useEffect(
        ()=>{
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res =>{
                setProduct(res.data)
            })
            
            .catch(err => console.log(err))


      }
    )
    React.useEffect(
      ()=>{

        let found = cart.find(item => item.id ==productId)
        console.log(found)
        setInCart(found)

      }, [cart]
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
      {
              inCart?
            <button onClick={()=>removeProduct(product.id)}>Remove from Cart</button>
            :
            <button onClick={()=>addProduct(product)}>Add to Cart</button>
            
            }
      </div>
      </div>
    </div>
  )
}

export default ProductDetail