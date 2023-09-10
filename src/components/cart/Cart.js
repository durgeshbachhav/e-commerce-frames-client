import React from 'react'
import './Cart.scss'
import { AiOutlineClose } from 'react-icons/ai'
import CartItem from '../cartItem/CartItem'
import { BsCartXFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { axiosClient } from '../../utils/axiosClient.js'

import { loadStripe } from '@stripe/stripe-js';



const Cart = ({ onClose }) => {

  const cart = useSelector((state) => state.cartReducer.cart)
  let totalAmount = 0;
  cart.forEach((item) => totalAmount += (item.quantity * item.price))

  const isCartIsEmpty = cart.length === 0;

  async function handleCheckout() {
    try {
      const response = await axiosClient.post(`/orders`, {
        products: cart,
      })
      const stripe = await loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`);
      const data = await stripe.redirectToCheckout({
        sessionId: response.data.stripeId,
      })

      console.log('stripe id:', data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="cart">
      <div className="overlay" onClick={onClose}>
        <div className="cart-content">
          <div className="header">
            <h3>Shopping Cart</h3>
            <div className="close-btn" onClick={onClose}><AiOutlineClose /></div>
          </div>
          <div className="cart-items">

            {cart.map(item => <CartItem key={item.key} cart={item} />)}
          </div>
          {isCartIsEmpty &&
            <div className="empty-cart-info">
              <div className="icon"><BsCartXFill /></div>
              <h3>Cart is Empty</h3>
            </div>
          }
          {!isCartIsEmpty &&
            <div className="checkout-info">
              <div className="total-amount">
                <h3 className='total-message'>total</h3>
                <h3 className='total-value'>{totalAmount}</h3>
              </div>
              <div className="checkout btn-primary" onClick={handleCheckout}>Checkout Now</div>
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default Cart