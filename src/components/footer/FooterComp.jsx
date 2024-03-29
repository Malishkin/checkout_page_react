import React from 'react';
import './FooterComp.css';
import riskFree from '../../img/4.png';
import pRotected from '../../img/5.png';
import seCure from '../../img/6.png';

const FooterComp = () => {
  return (
    <>
      <footer>
    <div className="footer-container">
      <div className="footer-item"><img src={riskFree} className="footer-img" alt=""/>
        <div className="footer-title">100% Risk Free</div>
        <div className="footer-text">If you’re not thrilled with how fantastic you look and feel after tapping into your
          unique female hormone advantage & or if you are’nt satisfied for any reason in the next 90 days, return
          anytime for a full refund (less S&H)</div>
      </div>

      <div className="footer-item"><img src={pRotected} className="footer-img" alt=""/>
        <div className="footer-title">100% Protected</div>
        <div className="footer-text">Your checkout is protected by industry leading PCI compliant security.</div>
      </div>
      <div className="footer-item"><img src={seCure} className="footer-img" alt=""/>
        <div className="footer-title">100% Secure</div>
        <div className="footer-text">When you place your order it will be protected by 256-bit encrypted SSL - the same technoligy that blanks use to
          protect their online transactions!</div>

      </div>
    </div>
    
  </footer>
    </>
  );
};

export default FooterComp;
