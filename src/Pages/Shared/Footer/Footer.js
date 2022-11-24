import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-slate-800">
      <div className="footer">
        <div className="mx-auto">
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Buy
          </Link>
          <Link to="/" className="link link-hover">
            Sell
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
      <div className="text-center mt-10 mx-auto">
        <p>Copyright © 2022 - All right reserved by Wish Boat</p>
      </div>
    </footer>
  );
};

export default Footer;
