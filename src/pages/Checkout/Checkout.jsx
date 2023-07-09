import React, {useContext} from 'react'
import './Checkout.css'
import Modal from 'react-modal'
import {useNavigate} from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import { CartContext } from '../../contexts/CartContext'

function Checkout() {
  let navigate = useNavigate()
  const {cart, addProduct, removeProduct, setCart} = useContext(CartContext)

  const [isOpen, setIsOpen] = React.useState(false);


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      height: '40%',
    },
    overlay:{
      backgroundColor:"rgba(0, 0, 0, 0.6)"
    }
  };

  Modal.setAppElement(document.getElementById('root'));

  const getTotal = () =>{
    let total = 0;
    for (let i = 0; i < cart.length; i++){
      total += cart[i].price;
    }
    return total;
   }

   const closeOrder = () =>{
    setIsOpen(false)
    setCart([])  
    navigate('/')
   }

   return (
    <div className="checkout-container">
      <div className='filter-container'>
        <h2>Item</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Remove</h2>
        </div>
        <div className="items-container">
        {
            cart.map(item => <CartItem product={item}/>)
        }
        </div>
        <div className="checkout-right">
        <h2>Total {getTotal()}</h2>
        <button onClick={()=>setIsOpen(true)}>Checkout</button>
        </div>

        <Modal
          isOpen={isOpen}   
          onRequestClose={()=>setIsOpen(false)}
          style={customStyles}
          contentLabel="Contact Us Modal"
      >
        <div className="modal-header">
          <h2>Your Order was successful!</h2>
          <h4>Check your email for the order confirmation.  Thank you for shopping with Fake Store!</h4>
          <button className="modal-close-btn"
                  onClick={closeOrder}>Return to Main Page
          </button>
        </div>
        
      </Modal>

    </div>
  )
}

export default Checkout