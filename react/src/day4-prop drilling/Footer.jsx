import React from 'react';

const Footer = ({ name }) => {
  return (
    <div className="box footer-box">
      <h3>Footer (Grandchild)</h3>
      <p>Finally! Using data: <span style={{color: '#f1c40f'}}>{name}</span></p>
      <p>© 2025 All Rights Reserved.</p>
    </div>
  );
};

export default Footer;