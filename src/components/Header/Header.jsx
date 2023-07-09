import React, {useContext} from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './Header.css'


function Header() {

  
  const {cart, addProduct, removeProduct} = useContext(CartContext)

  return (
    <div className="header-container">
        <Link to="/" style={{ textDecoration: 'none' }}><h1>Fake Store</h1></Link>
        <Link to='/checkout' className="cart-wrapper">
          <AiOutlineShoppingCart className="cart-icon"/>
          <p className="cart-number">{cart.length}</p>
        </Link>
    </div>
  )
}

export default Header