import React from 'react';

const Footer = () => {
    return (
        
        <footer className="footer flex flex-col   p-10">
 
        <div className='mx-auto'>
            <h2 className='text-2xl font-semibold'>Gadget Heaven</h2>
            <p className='text-slate-500'>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className='flex flex-row justify-between border-2 w-8/12 mx-auto'>   
  <nav className='flex flex-col'>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav className='flex flex-col'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav className='flex flex-col'>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  </div> 
</footer>
    );
};

export default Footer;