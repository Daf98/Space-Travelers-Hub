const baseURL = 'https://api.spacexdata.com/v3/';
// fetch data from API and move it to store
const fetchRocketsFromAPI = () => async () => {
  const data = await fetch(`${baseURL}/rockets/`);
  const response = await data.json();
  return response;
};

const fetchMissionsFromAPI = async () => {
  const response = await fetch(`${baseURL}/missions/`);
  const missionsData = await response.json();
  return missionsData;
};

export { fetchRocketsFromAPI, fetchMissionsFromAPI };
