import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  return (
    <div>
        <div className='header-container'>
        <h1>Fake Store</h1>
        <div className='checkout-icon'>
          <AiOutlineShoppingCart />
        </div>
        </div>
    </div>
  )
}

export default Header