import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-32 text-white bg-black p-32">
      <div>
        <img src="assets/logo.svg" alt="" />
        <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br /> trainer who is also a serial .
        </p>
      </div>
      <div>
        <span className="footer-title">About</span>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">About</a>
      </div>
      <div>
        <span className="footer-title">Support</span>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accessability</a>
      </div>
    </footer>
  );
};

export default Footer;
