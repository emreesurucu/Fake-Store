import React, {useContext} from 'react'
import './ProductCard.css'
import {FaEuroSign} from "react-icons/fa"
import { CartContext } from '../../contexts/CartContext';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ProductCard({product}) {

  const {cart, addProduct, removeProduct} = useContext(CartContext)
  const [inCart, setInCart] = React.useState(false)

  React.useEffect(
    ()=>{
      //is this card in favorites?
      setInCart(cart?.find(item=>item.id===product.id))
      console.log(inCart)
    }, [cart]
  )

  return (
    <div className='product-card'>
      {
        inCart?
        <FaHeart onClick={()=>removeProduct(product.id)}className="heart-blue" />
        :
        <FaRegHeart  
        onClick={()=>addProduct(product)} />
      }
      <Link to={`/Product-detail/${product.id}`} className="product-card">
      <img src={product.image} />
      </Link>
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