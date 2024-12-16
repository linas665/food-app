import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>At Quick Bite, we connect you with the best restaurants and eateries in your area, allowing you to explore an extensive range of cuisines, from comforting classics to exotic dishes, all curated to match your taste preferences.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                 <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
             <h2>Get In Touch</h2>
             <ul>
                <li>+91-000-999-00-22</li>
                <li>quickbyte@gmail.com</li>
             </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright"> © 2024 Quick Bite. All rights reserved. | Terms of Service | Privacy Policy</p>
        </div>
    )
}

export default Footer
