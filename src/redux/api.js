import { useDispatch } from "react-redux/es/exports";
const baseURL = 'https://api.spacexdata.com/v3/';
const dispatch = useDispatch;
// fetch data from API and move it to store
const fetchRocketsFromAPI = () => async () => {
  const data = await fetch(`${baseURL}/rockets/`);
  const response = await data.json();
  console.log(response);
};

dispatch(fetchRocketsFromAPI());

export { fetchRocketsFromAPI };
