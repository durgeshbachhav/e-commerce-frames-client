import React from "react";
import "./CartItem.scss";
import { AiOutlineClose } from "react-icons/ai";
import dumyImg from "../../assets/naruto.jpeg";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <div className="item-img">
        <img src={cart.image} alt="" />
      </div>
      <div className="product-info-wrapper">
        <div className="item-info">
          <p className="title">{cart.title}e</p>
          <p className="price">₹{cart.price}</p>
          <div className="quantity-selector">
            <span
              className="btn decrement"
              onClick={() => dispatch(removeFromCart(cart))}
            >
              -
            </span>
            <span className="quantity ">{cart.quantity}</span>
            <span
              className="btn increment"
              onClick={() => dispatch(addToCart(cart))}
            >
              +
            </span>
          </div>
          <p className="total-price">subtotal: ₹{cart.quantity * cart.price}</p>
        </div>
        <div className="item-remove">
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
