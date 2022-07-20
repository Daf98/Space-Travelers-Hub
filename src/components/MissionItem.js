import React from 'react';
import PropTypes from 'prop-types';
import './styles/Missions.css';

const MissionItem = (props) => {
  const {
    id, name, description, reserved,
  } = props;

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>

      <td>
        <span className={reserved ? 'activeMember' : 'notMember'}>
          {reserved ? 'Active Member' : 'Not A Member'}
        </span>
      </td>

      <td>
        <button type="button" className={reserved ? 'leaveMission' : ''}>
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default MissionItem;
