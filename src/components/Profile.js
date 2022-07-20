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
          {reservedRockets.map((rocket) => (
            <p key={rocket.id}>{rocket.name}</p>
          ))}
        </div>
        <h2>My Rockets</h2>
      </div>
    </>
  );
};

export default Profile;
