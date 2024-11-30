import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import RulesTable from './components/RulesTable/RulesTable';
import AddRuleModal from './components/AddRuleModal/AddRuleModal';
import './App.css';

function App() {
  const [rules, setRules] = useState([]);
  const [showModal, setShowModal] = useState(false);
  console.log(rules)
  useEffect(() => {
    // Fetch rules from the backend
    fetch('http://localhost:5000/api/rules')
      .then(response => response.json())
      .then(data => setRules(data));
  }, []);

  const addRule = (newRule) => {
    setRules([...rules, newRule]);
  };

  return (
    <div className="app">
      <Header onAddRule={() => setShowModal(true)} />
      <RulesTable rules={rules} />
      {showModal && <AddRuleModal onClose={() => setShowModal(false)} onAddRule={addRule} />}
    </div>
  );
}

export default App;