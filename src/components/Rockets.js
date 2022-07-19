import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchRocketsFromAPI, changeReservationStatus} from '../redux/api';
import "./styles/Rockets.css";

const Rockets = () => {
  const dispatch = useDispatch();
//   const [state, setState] = useState([{},{},{},{}]);
//   const hornero = () => {
//     if (state === false) {
//         setState({boolean: true, text: "Reserve rocket"});
//     } else {
//         setState({boolean: false, text: "Cancel reservation"});
//     }
//     console.log(state);
//     }
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
            src={rocket.flickr_images[0]}
            alt="Rocket image"
          />
          <div className="rocket-description">
            <h1 id={rocket.id}>{rocket.rocket_name}</h1>
            <p>{rocket.description}</p>
            <button id={rocket.id} onClick={() => dispatch(changeReservationStatus)}>AAAAAAAAAA</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
