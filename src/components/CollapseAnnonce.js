import React, { useState } from 'react';
import '../styles/CollapseAnnonce.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


export default function CollapseAnnonce({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse-container-annonce">
      <button onClick={handleToggle} className="collapse-toggle-annonce">
        {title || 'Toggle'} 
        <FontAwesomeIcon
          icon={faChevronUp} 
          className={`chevron-up ${isOpen ? "rotate-left" : "rotate-right"}`}
        />
      </button>
      <div className={`collapse-content-annonce ${isOpen ? 'open' : ''}`}>
        <div className="collapse-text-annonce">
          {children}
        </div>
      </div>
    </div>
  );
}