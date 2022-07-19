import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsFromAPI } from '../redux/api';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets);
  useEffect(() => {
    dispatch(fetchRocketsFromAPI());
  }, []);
  return <div>{rockets.map((rocket) => <h1 key={rocket.id}>{rocket.rocket_name}</h1>)}</div>;
};

export default Rockets;
