import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const Missions = () => {
  // reading state from the store with useSelector
  const Missions = useSelector((state) => state.Missions);

  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th label="Empty" />
        </tr>
      </thead>
      <tbody className="table-body">
        {Missions.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.mission_id}
            reserved={mission.reserved}
            mission={mission}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
