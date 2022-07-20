import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.Rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <>
      <div className="profile-container">
        <div className="profile-missions">
          <h2>My Missions</h2>
        </div>
        <div className="profile-rockets">
          <h2>My Rockets</h2>
          {reservedRockets.length ? (
            <div className="reservation-container">
              {reservedRockets.map((rocket) => (
                <p id="reserved-rocket" key={rocket.id}>
                  {rocket.name}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Profile;
