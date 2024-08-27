import React, { useState } from 'react';
import '../styles/Collapse.css'; 

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse-container">
      <button onClick={toggle} className="collapse-toggle">
        {title || 'Toggle'}
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <div className="collapse-text">
          {children}
        </div>
      </div>
    </div>
  );
}