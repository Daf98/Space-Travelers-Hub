import React from 'react';

const Mission = () => (
  <tr id="mission-item">
    <td className="mission-title">Mission-name</td>
    <td className="mission-description">Mission-Description</td>
    <td>
      <button type="button" className="active-member">
        Active Member
      </button>
      <button type="button" className="not-member">
        Not a Member
      </button>
    </td>
    <td>
      <button type="button" className="join-mission">
        Join Mission
      </button>
      <button type="button" className="leave-mission">
        Leave Mission
      </button>
    </td>
  </tr>
);

export default Mission;
