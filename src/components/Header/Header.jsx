import React from 'react';
import './Header.css';

function Header({ onAddRule }) {
  return (
    <div className="header">
      <h1>Rules Engine</h1>
      <button className="add-rule-button" onClick={onAddRule}>
        + Add Rule
      </button>
    </div>
  );
}

export default Header;