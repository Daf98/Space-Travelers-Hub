import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveMissions } from '../redux/missions/missions';

const MissionItem = (props) => {
  const {
    id, name, description, reserved,
  } = props;
  const dispatch = useDispatch();

  const handleReserved = (event) => {
    const reserve = event.target.getAttribute('data-reserved');
    const missionId = event.target.getAttribute('data-id');
    dispatch(reserveMissions(missionId, reserve));
  };

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>

      <td className="participation-status">
        {reserved ? (
          <button type="button" className="active-member">
            Active Member
          </button>
        ) : (
          <button type="button" className="not-member">
            Not a Member
          </button>
        )}
      </td>

      <td>
        {reserved ? (
          <button
            type="button"
            className="leave-mission"
            id={id}
            data_id={id}
            data-reserved={0}
            onClick={handleReserved}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className="join-mission"
            id={id}
            data_id={id}
            data-reserved={1}
            onClick={handleReserved}
          >
            Join Mission
          </button>
        )}
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
