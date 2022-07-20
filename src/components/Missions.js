import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cancelMission,
  fetchMissions,
  reserveMission,
} from '../redux/missions/missions';
import './styles/Missions.css';

const Missions = () => {
  const dispatch = useDispatch();

  // reading state from the store with useSelector
  const Missions = useSelector((state) => state.Missions);

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
          <th>
            <div />
          </th>
        </tr>
      </thead>
      <tbody className="table-body">
        {Missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>

            <td>
              <span className={mission.reserved ? 'activeMember' : 'notMember'}>
                {mission.reserved ? 'Active Member' : 'Not A Member'}
              </span>
            </td>

            <td>
              {mission.reserved ? (
                <button
                  type="button"
                  id={mission.id}
                  className="leaveMission"
                  onClick={() => dispatch(cancelMission(mission.id))}
                >
                  Leave Mission
                </button>
              ) : (
                <button
                  type="button"
                  id={mission.id}
                  className="joinMission"
                  onClick={() => dispatch(reserveMission(mission.id))}
                >
                  Join Mission
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
