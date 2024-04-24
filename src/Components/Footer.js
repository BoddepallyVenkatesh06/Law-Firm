import React from 'react';
import './Footer.css';
import Pinterest from '../assests/pinterest.svg';
import Instagram from '../assests/instagram.svg';
import Twitter from '../assests/twitter.svg';
import Facebook from '../assests/facebook.svg';
import { ReactComponent as Logo }  from "../assests/Logo.svg";


const itemList = ["Home", "Attroneys", "Practice Areas", "About Us"];
const iconList = [Instagram, Facebook, Twitter, Pinterest];

const Footer = () => {
  return (
    <div className="footer-wrapper">
    <div className="first-row-wrapper">
        <div className="footer-logo">
            <Logo />
        </div>
        <div className="list-item-wrapper">
            <ul>
                {itemList.map((each, index) => (
                    <li key={index}>{each}</li>
                ))}
            </ul>
        </div>
        <div className="icon-wrapper">
            <ul className="list-container">
                {iconList.map((eachIcon, index) => (
                    <li key={index}>
                        <img src={eachIcon} alt="Icon" width={30} height={30} />
                    </li>
                ))}
            </ul>
        </div>
    </div>
    <div className="website-detail">
        <p>© 2024 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Made By <a href="https://github.com/BoddepallyVenkatesh06" class="custom-link"><span class="bold-text">Venky Kumar</span></a></p>
    </div>
</div>
  )
}

export default Footer
