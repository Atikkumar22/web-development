import React from 'react';
import MainPage from './MainPage';

function App() {
  const academyName = "Horizon Tennis Academy";

  return (
    <div className="app-container">
      <div className="box app-box">
        <h1>App Component</h1>
        <p>Data Origin: <span className="prop-label">{academyName}</span></p>
        
        {/* Passing to Middleman */}
        <MainPage name={academyName} />
      </div>
    </div>
  );
}

export default App;