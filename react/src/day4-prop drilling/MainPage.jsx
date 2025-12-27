import React from 'react';
import Footer from './Footer';

const MainPage = ({ name }) => {
  return (
    <div className="box main-box">
      <h2>MainPage (Middleman)</h2>
      <p>I don't use the name, but I must pass it.</p>
      
      {/* Drilling happens here */}
      <Footer name={name} />
    </div>
  );
};

export default MainPage;