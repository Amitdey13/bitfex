import React from 'react'
import "../App.css"
import { telegram, twitter, instagram, youtube, linkedin, facebook } from "../img"

export default function Footer() {
    return (
      <div className="footer">
            <div className="footer-info">
                <div><h2><span>ABOU</span>T</h2>
                    <div className="footer-link">About Us</div>
                    <div className="footer-link">Privacy Policy</div>
                    <div className="footer-link">Terms of Use</div>
                </div>
                <div><h2><span>CONTACT U</span>S</h2>
                    <div className="footer-link">Support:
                    <div>support@bitfex.com</div></div>
                    <div className="footer-link">Queries:
                    <div>info@bitfex.com</div></div></div>
                <div><h2><span>SOCIA</span>L</h2>
                    <div className="social"><img src={telegram} alt="telegram" /><img src={twitter} alt="twitter" /><img src={linkedin} alt="linkedin" /><img src={facebook} alt="facebook" /><img src={instagram} alt="instagram" /><img src={youtube} alt="youtube" /></div></div>
        </div>
            <div style={{fontSize:"0.85rem"}}>Copyright {"\u00a9"} 2020 Bitdex, All Rights Reserved</div>
      </div>
    );
}
