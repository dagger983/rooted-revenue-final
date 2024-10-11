// LendingPartners.js

import React from 'react';
import './LendingPartners.css'; // Import CSS file

const LendingPartners = () => {
  return (
    <div className="lending-partners">
        <p className='partner-subtitle'>Our Partners</p>
      <h2 className="partner-title">Our Lending Partners</h2>
      <div className="partners-grid">
        <img src="/icici-bank.webp" alt="ICICI Bank" />
        <img style={{position:"relative",top:"10px"}} src="/hdfc.png" alt="HDFC Bank" />
        <img src="/axis.webp" alt="Axis Bank" />
        <img src="/axis-finance.webp" alt="Axis Finance" />
        <img src="/adity_brila.webp" alt="Aditya Birla Capital" />
        <img src="/incred.webp" alt="InCred" />
        <img style={{maxWidth:"300px"}} src="/finnable.png" alt="Finnable" />
        <img src="/hero.webp" alt="Hero Fincorp" />
        <img src="/pirmal.webp" alt="Piramal Finance" />
        <img src="/bajaj.webp" alt="Bajaj Finserv" />
        <img src="/dbs.webp" alt="DBS Bank" />
        <img style={{maxWidth:"300px",position:"relative",top:"30px"}} src="/indusland.png" alt="IndusInd Bank" />
      </div>
    </div>
  );
};

export default LendingPartners;
