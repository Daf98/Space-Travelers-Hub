import React from 'react';
import { useDispatch } from 'react-redux';
import reserveMissions from '../redux/missions/missions';

const Mission = (prop) => {
  const { mission, id, reserved } = prop;
  const dispatch = useDispatch();

  const handleReserved = (e) => {
    const reserve = e.target.getAttribute('data-reserved');
    const missionId = e.target.getAttribute('data-Id');
    dispatch(reserveMissions(missionId, reserve));
  };

  return (
    <tr id="table-content-row">
      <td className="mission-title">{mission.mission_name}</td>
      <td className="mission-description">{mission.description}</td>

      <td>
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
            mission_id={id}
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
            mission_id={id}
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

export default Mission;
