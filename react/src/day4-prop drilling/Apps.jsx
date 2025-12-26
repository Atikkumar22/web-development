
import React from 'react';
import MainPage from './MainPage';

function Apps() {
  const name = "Horizon Tennis Academy";

  return (
    <div className="App">
      <h1>Academy Portal</h1>
      {/* Passing data to MainPage */}
      <MainPage academyName={name} />
    </div>
  );
}

export default Apps;