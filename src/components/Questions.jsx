import React from 'react';
import guys from '../assets/3-guys.png';
import righty from '../assets/righty.png';

const Questions = () => {
  return (
    <div style={{ backgroundColor: "#E8EBF0", padding: "2.3rem", borderTop: "2px solid #BAC5D2" }}>
      <div className="flex flex-col items-center" style={{ backgroundColor: "#10253C", height: "25rem", borderRadius: "3rem", padding: "2rem" }}>
        <div className="flex flex-col items-center justify-center gap-4" style={{ flex: 1 }}>
          <img src={guys} alt="Group of People" style={{ height: "5rem" }} />
          <h2 style={{ color: "white", fontSize: "1.5rem", textAlign: "center" }}>Still have questions?</h2>
          <p style={{ color: "white", textAlign: "center" }}>Have questions, or want to talk about working with us?</p>
          <button style={{ backgroundColor: "#3070B6", color: "white", borderRadius: "2rem", width: "10rem", height: "2.5rem", fontSize: "1rem" }}>
            Contact us ↗
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
