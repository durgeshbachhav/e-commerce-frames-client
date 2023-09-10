import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";

import dumyImg from "../../assets/naruto.jpeg";
import { axiosClient } from "../../utils/axiosClient";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

const ProductDetail = () => {
  const params = useParams();
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);

  const quantity =
    cart.find((item) => item.key === params.productId)?.quantity || 0;
  const fetchdata = async () => {
    try {
      const productResponse = await axiosClient.get(
        `/products?filters[key][$eq]=${params.productId}&populate=*`
      );

      if (productResponse.data.data.length > 0) {
        setProducts(productResponse.data.data[0]);
      }
    } catch (error) {}
  };

  useEffect(() => {
    setProducts(null);
    fetchdata();
  }, [params]);

  if (!products) {
    return <Loader />;
  }
  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img center">
            <img
              src={products?.attributes.image.data.attributes.url}
              alt="product img"
            />
          </div>
          <div className="product-info">
            <h1 className="heading">{products?.attributes.title}</h1>
            <h3 className="price">₹ {products?.attributes.price}</h3>
            <p className="desc">{products?.attributes.desc}</p>

            <div className="cart-options">
              <div className="quantity-selector">
                <span
                  className="btn decrement"
                  onClick={() => dispatch(removeFromCart(products))}
                >
                  -
                </span>
                <span className="quantity ">{quantity}</span>
                <span
                  className="btn increment"
                  onClick={() => dispatch(addToCart(products))}
                >
                  +
                </span>
              </div>
              <div
                className="btn-primary add-to-cart"
                onClick={() => dispatch(addToCart(products))}
              >
                ADD TO CART
              </div>
            </div>
            <div className="return-polocy">
              <ul>
                <h3>Key Features: </h3>
                <li>
                  <h4>Premium Quality Materials:</h4> Our poster is printed on
                  high-quality 300 GSM Fine Art Matte Paper, ensuring vibrant
                  and long-lasting colors.
                </li>
                <li>
                  <h4>Elegant Black Frame: </h4> The poster comes in an elegant
                  black frame made of premium quality synthetic wood, adding a
                  touch of sophistication to your décor.
                </li>
                <li>
                  <h4>High-Quality Print:</h4> Industry-recognized high-quality
                  printing technology ensures that every detail of your favorite
                  anime characters comes to life with precision and clarity.
                </li>
                <li>
                  <h4>Protective Matte Coating:</h4> A protective matte coating
                  is applied to the poster, providing a vivid, sharp, and
                  non-reflective appearance while preserving the artwork's
                  integrity.
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
