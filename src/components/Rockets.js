import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rockets';
import './styles/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets);
  return (
    <div>
      {rockets.map((rocket) => (
        <div className="rocket-container" key={rocket.id}>
          <img
            className="rocket-image"
            src={rocket.images[0]}
            alt="Rocket"
          />
          <div className="rocket-description">
            <h2 id={rocket.id}>{rocket.name}</h2>
            <p className="reserved-container">
              {rocket.reserved ? <span id="badge">Reserved</span> : null}
              {rocket.description}
            </p>
            {(rocket.reserved)
              ? (<button className="cancel-btn" type="button" id={rocket.id} onClick={() => dispatch(cancelRocket(rocket.id))}>Cancel reservation</button>)
              : (<button className="reserve-btn" type="button" id={rocket.id} onClick={() => dispatch(reserveRocket(rocket.id))}>Reserve rocket</button>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
