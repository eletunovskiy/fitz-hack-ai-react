import React from 'react';
import RuleCard from './RuleCard_1'; // Component for individual rules
import './App.css'; // Import CSS for styles

const App = () => {
  const rules = [
    {
      id: 1,
      name: 'Temperature Rule',
      description: 'IF Current Temperature is > Greater than 10, THEN send an E-mail to mainaddress@gmail.com',
      connectedDevices: 'QingPing, Device name',
      status: true,
    },
    {
      id: 2,
      name: 'Door Rule',
      description: 'IF Door Sensor is - Opened, THEN send an E-mail to mainaddress@gmail.com',
      connectedDevices: 'Dragino2019',
      status: false,
    },
    {
      id: 3,
      name: 'Temperature Rule',
      description: 'IF Current Temperature is > Greater than 10, THEN send an E-mail to mainaddress@gmail.com',
      connectedDevices: 'QingPing, Device name, Temperature Sensor, Weather station',
      status: false,
    },
  ];

  return (
    <div className="rules-engine-container">
      <header className="rules-engine-header">
        <h1>Rules Engine</h1>
        <p>Create rules and apply them to one device or several at once.</p>
        <button className="add-rule-button">+ Add Rule</button>
      </header>

      <div className="rules-list">
        {rules.map((rule) => (
          <RuleCard key={rule.id} rule={rule} />
        ))}
      </div>
    </div>
  );
};


export default App
