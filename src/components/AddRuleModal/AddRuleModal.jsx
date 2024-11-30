import React, { useState } from 'react';
import './AddRuleModal.css';

function AddRuleModal({ onClose, onAddRule }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [devices, setDevices] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRule = {
      id: Date.now(),
      name,
      description,
      devices,
      active: false,
    };
    onAddRule(newRule);
    onClose();
    // Send new rule to backend
    fetch('/api/rules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRule),
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Rule</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Rule Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>
          <label>
            Connected Devices:
            <input type="text" value={devices} onChange={(e) => setDevices(e.target.value)} required />
          </label>
          <div className="modal-buttons">
            <button type="submit">Add Rule</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRuleModal;