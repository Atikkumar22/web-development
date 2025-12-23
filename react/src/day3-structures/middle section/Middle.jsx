import React from 'react';

const Middle = () => {
  return (
    <div className="middle-page">

      <section className="stats-section">
        <div className="stats-header">
           <span className="badge">About Horizon</span>
           <p className="description">
             At Horizon, we don't just play tennis — we live it. Since 2021, our club has been a home for players of all levels, from eager beginners to seasoned pros.
           </p>
        </div>

        <div className="features-grid">
          {/* Card 1 */}
          <div className="feature-card dark-card">
            <i className="ri-building-line icon-large"></i>
            <h3>Professional hard courts with tournament-grade lighting & climate control — play in <strong>perfect conditions</strong>, in any season.</h3>
            <div className="toggle-container">
               <div className="toggle-switch"></div>
               <span>Game Mode</span>
            </div>
          </div>

          {/* Card 2 (Image Card) */}
          <div className="feature-card img-card">
            <div className="glass-label">Private & Group Lessons</div>
          </div>

          {/* Card 3 (Stats/Coaches) */}
          <div className="feature-card white-card">
            <h2>100+</h2>
            <p><strong>Pro Coaches</strong></p>
            <p className="sub-text">Certified professionals ready to boost your game from first serve to tournament level.</p>
            <div className="skill-bars">
               <div className="bar">Beginner <span>•••••••••• 55</span></div>
               <div className="bar">Intermediate <span>•••••••• 40</span></div>
               <div className="bar">Advanced <span>•••••• 35</span></div>
            </div>
          </div>
        </div>

        {/* Bottom Counter Stats */}
        <div className="counter-grid">
           <div className="counter-item"><h2>12 000+</h2><p>Hours of play annually</p></div>
           <div className="counter-item"><h2>89%</h2><p>Player Retention Rate</p></div>
           <div className="counter-item"><h2>1,200+</h2><p>Active Members</p></div>
           <div className="counter-item"><h2>125+</h2><p>Annual Tournaments</p></div>
        </div>
      </section>
    </div>
  );
};

export default Middle;