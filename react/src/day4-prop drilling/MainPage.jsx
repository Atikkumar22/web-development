// MainPage.jsx
import React from 'react';
import Footer from './Footer';
const MainPage = ({ academyName }) => {
  return (
    <main>
      <h2>Welcome to the Training Dashboard</h2>
      {/* Drilling happens here: Passing academyName to Footer */}
      <Footer academyName={academyName} />
    </main>
  );
};

export default MainPage;