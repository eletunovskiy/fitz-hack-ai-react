import React, { useState } from 'react';

const RuleCard = ({ rule }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="rule-card">
      <div className="rule-details">
        <h3>{rule.name}</h3>
        <p>{rule.description}</p>
        <span>{rule.connectedDevices}</span>
      </div>

      <div className="rule-actions">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={rule.status}
            onChange={() => console.log('Toggle rule:', rule.id)}
          />
          <span className="slider"></span>
        </label>

        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>⋮</button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={() => console.log('Trigger rule:', rule.id)}>Trigger</button>
              <button onClick={() => console.log('Edit rule:', rule.id)}>Edit name or description</button>
              <button onClick={() => console.log('Delete rule:', rule.id)}>Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RuleCard;