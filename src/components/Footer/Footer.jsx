import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
             <div className="footer-content-left">
<img src={assets.logo} alt='' className='logo'/>
<p>Lorem ipsum dolor, sit amet consectetur adlitiaelectus eaque recusandae fugit libero excepturi quae. Assumenda quidem nobis minima quo.
</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon}alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
             </div>
             <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

                </div>
             <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+91 9161307071</li>
    <li>bcacodingwaala@gmail.com</li>
</ul>
             </div>
            
        </div>
        <hr/>
        <p className="footer-copyright">
        Copyright 2024 @ Speedy food.com - All Right Reserved
        </p>
     
    </div>
  )
}

export default Footer
