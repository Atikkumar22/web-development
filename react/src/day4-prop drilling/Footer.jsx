// Footer.jsx
import React from 'react';

const Footer = ({ academyName }) => {
  return (
    <footer style={{ marginTop: '50px', borderTop: '1px solid #ccc' }}>
      <p>© 2025 {academyName}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;