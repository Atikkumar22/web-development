import React from 'react';

// 3. Sabse chota component (GrandChild)
// Ise data ki asli zaroorat hai
function GrandChild({ name }) {
  return <h3>Hello, {name}! (GrandChild)</h3>;
}

// 2. Beech wala component (Parent)
// Ise 'name' ki zaroorat nahi hai, par ye niche pass kar raha hai
function Parent({ name }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h2>I am the Parent</h2>
      <GrandChild name={name} />
    </div>
  );
}

// 1. Sabse upar ka component (App)
// Yahan data (state) maujood hai
function Prop() {
  const userName = "Tennis Champion";

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>App Component</h1>
      <Parent name={userName} />
    </div>
  );
}

export default Prop;