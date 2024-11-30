import React from 'react';
import './RulesTabel.css';
import RuleRow from './RuleRow';

function RulesTable({ rules }) {
  return (
    <table className="rules-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Connected Devices</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {rules.map((rule, index) => (
          <RuleRow key={rule.id} rule={rule} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default RulesTable;