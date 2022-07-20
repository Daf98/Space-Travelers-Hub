import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRocketsFromAPI from '../redux/api';
import { reserveRocket, cancelRocket } from '../redux/rockets/rockets';
import './styles/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets);
  useEffect(() => {
    dispatch(fetchRocketsFromAPI());
  }, []);
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
            <h1 id={rocket.id}>{rocket.name}</h1>
            {rocket.reserved ? <p>Reserved</p> : null}
            <p>{rocket.description}</p>
            {(rocket.reserved)
              ? (<button type="button" id={rocket.id} onClick={() => dispatch(cancelRocket(rocket.id))}>Cancel reservation</button>)
              : (<button type="button" id={rocket.id} onClick={() => dispatch(reserveRocket(rocket.id))}>Reserve rocket</button>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
