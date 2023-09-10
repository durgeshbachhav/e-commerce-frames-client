import React from "react";
import "./Payment.scss";
import { useNavigate, useParams } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import { BsCartCheckFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartSlice";

const Payments = () => {
  const params = useParams();
  const status = params.status;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const infodata = {
    success: {
      title: "Thank you for your order",
      cta: "Shop More",
      icon: <BsCartCheckFill />,
    },
    failed: {
      title: "Your payment was unsuccessful",
      cta: "Try Again",
      icon: <ImCancelCircle />,
    },
  };

  if (status === "success") {
    dispatch(resetCart());
  }

  function handleNavigate() {}
  return (
    <div className="payment">
      <div className="icon">{infodata[status].icon}</div>
      <h2 className="message">{infodata[status].title}</h2>
      <div className="btn-primary" onClick={() => navigate("/category")}>
        {infodata[status].cta}
      </div>
    </div>
  );
};

export default Payments;
