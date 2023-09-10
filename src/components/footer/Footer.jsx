import React from "react";
import "./Footer.scss";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import icons from "../../assets/creditcardicons.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="content">
          <div className="footer-left">
            <h3 className="title">Follow Us</h3>
            <ul className="follow">
              <li className="hover-link center">
                <a
                  className="center"
                  href="https://www.instagram.com/durgesh.bachhav_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineInstagram size={25} />
                </a>
              </li>
              <li className="hover-link center">
                <a
                  className="center"
                  href="https://www.instagram.com/durgesh.bachhav_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineFacebook size={25}/>
                </a>
              </li>
              <li className="hover-link center">
                <a
                  className="center"
                  href="https://www.instagram.com/durgesh.bachhav_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter size={25}/>
                </a>
              </li>
              <li className="hover-link center">
                <a
                  className="center"
                  href="https://www.instagram.com/durgesh.bachhav_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineMail size={25}/>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h3 className="title">FRAMES</h3>
            <ul className="company">
              <li className="hover-link">contact us</li>
              <li className="hover-link">privacy policy</li>
              <li className="hover-link">return and exchange policy</li>
              <li className="hover-link">shipping polocy</li>
              <li className="hover-link">term and condition</li>
            </ul>
          </div>
        </div>
        <div className="subfooter center">
          <div className="credit-card-img">
            <img src={icons} alt="" />
          </div>
          <p>
            Copyright {new Date().getFullYear()} ©{" "}
            <strong>durgesh_bachhav</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
