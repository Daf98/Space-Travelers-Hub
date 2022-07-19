import { fetchRocket, reserveRocket } from './rockets/rockets';

const baseURL = 'https://api.spacexdata.com/v3';
// fetch data from API and move it to store
const fetchRocketsFromAPI = () => async (dispatch) => {
  const data = await fetch(`${baseURL}/rockets/`);
  const response = await data.json();
  dispatch(fetchRocket(response));
};

const changeReservationStatus = () => async (dispatch) => {
  const data = await fetch(`${baseURL}/rockets/`);
  const response = await data.json();
  console.log(response);
  dispatch(reserveRocket(response));
}

export {fetchRocketsFromAPI, changeReservationStatus};
