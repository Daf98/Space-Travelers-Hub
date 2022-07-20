import React from 'react';

const Mission = (prop) => {
  const { mission, id, reserved } = prop;
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
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

export default Mission;
