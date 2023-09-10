import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [opencart, setopencart] = useState(false);
  const cart = useSelector((state) => state.cartReducer.cart);
  let totalItem = 0;
  cart.forEach((item) => (totalItem += item.quantity));

  const categories = useSelector((state) => state.categoryReducer.categories);
  console.log("categories", categories);

  return (
    <div>
      <div className="navbar ">
        <div className="container nav-container">
          <div className="nav-left">
            <ul className="link-group">
              {categories?.map((category) => (
                <li className="hover-link" key={category.id}>
                  <Link
                    className="link"
                    to={`/category/${category.attributes.key}`}
                  >
                    {category.attributes.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-center">
            <Link to="/">
              <h1 className="banner">FRAMES</h1>
            </Link>
          </div>
          <div className="nav-right">
            <div
              className="nav-cart hover-link"
              onClick={() => setopencart(!opencart)}
            >
              <BsFillCartPlusFill className="icon" />
              {totalItem > 0 && (
                <span className="cart-count center">{totalItem}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {opencart && <Cart onClose={() => setopencart(false)} />}
    </div>
  );
};

export default Navbar;
