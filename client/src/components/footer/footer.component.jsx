import React from "react";
import "./footer.styles.scss";
import payment from "../../assets/payment.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__upper">
        <div className="footer__upper-link">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Man</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="footer__upper-link">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="footer__upper-link">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            rutrum justo nec arcu elementum, ac commodo sem fringilla. Fusce
            malesuada nisi sit amet est bibendum tempor. Proin eget aliquet
            felis.
          </p>
        </div>

        <div className="footer__upper-link">
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            rutrum justo nec arcu elementum, ac commodo sem fringilla. Fusce
            malesuada nisi sit amet est bibendum tempor. Proin eget aliquet
            felis.
          </p>
        </div>
      </div>
      <div className="footer__lower">
        <div className="left">
          <span className="logo">MAGNUS CENTAR</span>
          <span className="copyright">
            &copy; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src={payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
