import React from 'react';
import logo2 from '../assets/HESED-LOGO2.png'
import sm1 from '../assets/facebook.png'
import sm2 from '../assets/instagram.png'
import sm3 from '../assets/twitter.png'
import sm4 from '../assets/linkeldn.png'
import sm5 from '../assets/youtube.png'


const Footer = () => {
    return (
      <footer className="py-10 text-gray-600">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-15">
          <div>
            <img src={logo2} style={{height:"6rem"}} />
            <h3 className="text-lg font-semibold mb-2">Empowering Education <br/> with Innovation and <br/> Simplicity.</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#"><img src={sm1}  style={{height:"1rem"}} /></a>
              <a href="#"><img src={sm2} style={{height:"1rem"}}/></a>
              <a href="#"><img src={sm3} /></a>
              <a href="#"><img src={sm4} style={{height:"1rem"}} /></a>
              <a href="#"><img src={sm5}  style={{height:"1rem"}}/></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul>
              <li>Results Management</li>
              <li>School Fees Portal</li>
              <li>Staff and Student Management</li>
              <li>Inventory Management</li>
              <li>Communication Management</li>
              <li>Past Questions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <ul>
              <li>Our Story</li>
              <li>Teams</li>
              <li>Benefits</li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>My Account</li>
              <li>Help & Support</li>
            </ul>
          </div>
        </div>

      </footer>
    );
  };
  
  export default Footer;