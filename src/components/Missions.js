import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import MissionItem from './MissionItem';

const Missions = () => {
  const dispatch = useDispatch();
  // reading state from the store with useSelector
  const Missions = useSelector((state) => state.Missions);
  const reserved = false;

  // show all missions
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

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
          <MissionItem
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
            reserved={reserved}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
