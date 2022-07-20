// Actions
const SPACE_MISSIONS = 'SpaceTravelers/Missions/SPACE_MISSIONS';
const RESERVATION = 'SpaceTravelers/Missions/RESERVATION';
const URL = 'https://api.spacexdata.com/v3';

// Action creators
export const reserveMissions = (id, status) => ({
  type: RESERVATION,
  mission: {
    id,
    status: Boolean(Number(status)),
  },
});

export const getMissions = (missions) => ({
  type: SPACE_MISSIONS,
  missions,
});

// get missions from the API

export const fetchMissions = () => async (dispatch) => {
  const arrayOfMissions = await fetch(`${URL}/missions/`)
    .then((res) => res.json())
    .then((data) => Object.entries(data).map((mission) => {
      const { description } = mission[1];
      const id = mission[1].mission_id;
      const name = mission[1].mission_name;
      return { id, name, description };
    }));
  dispatch(getMissions(arrayOfMissions));
};

// reducer
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case SPACE_MISSIONS:
      return action.missions;

    case RESERVATION:
      return [
        ...state.map((mission) => {
          if (mission.mission_id === action.mission.id) {
            return { ...mission, reserved: action.mission.status };
          }
          return mission;
        }),
      ];
    default:
      return state;
  }
};

export default missionsReducer;
