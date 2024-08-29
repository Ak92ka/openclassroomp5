import React, { useState } from 'react';
import '../styles/Collapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


export default function Collapse({ title, isArray, children }) {
  const [isOpen, setIsOpen] = useState(false);


  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse-container">
      <button onClick={handleToggle} className="collapse-toggle">
        {title || 'Toggle'}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`chevron-up ${isOpen ? "rotate-left" : "rotate-right"}`}
        />
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <div className="collapse-text">
          <div>
            {Array.isArray(children) ? (
              children.map((child, index) => <p key={index}>{child}</p>)
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </div>
  );
}