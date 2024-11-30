import './RuleRow.css';
import { FaEllipsisV } from 'react-icons/fa';
import  { useState } from 'react';
function RuleRow({ rule, index }) {
  const [isActive, setIsActive] = useState(rule.active);
  const [showMenu, setShowMenu] = useState(false);

  const toggleStatus = () => {
    setIsActive(!isActive);
    // Update status in backend
    fetch(`https://localhost:5000/api/rules/${rule.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active: !isActive }),
    });
  };

  return (
    <tr>
      <td>{rule.name}</td>
      <td>{rule.description}</td>
      <td>{rule.devices}</td>
      <td>
        <div className="toggle-switch" onClick={toggleStatus}>
          <div className={`slider ${isActive ? 'active' : ''}`}>
            {isActive ? 'Active' : 'Inactive'}
          </div>
        </div>
      </td>
      <td className="menu-cell">
        <FaEllipsisV onClick={() => setShowMenu(!showMenu)} />
        {showMenu && (
          <ul className="dropdown-menu">
            <li>Trigger</li>
            <li>Edit name or description</li>
            <li>Delete</li>
          </ul>
        )}
      </td>
    </tr>
  );
}

export default RuleRow;