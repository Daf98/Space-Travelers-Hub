// Actions
const SPACE_MISSIONS = 'SpaceTravelers/Missions/SPACE_MISSIONS';
const RESERVATION = 'SpaceTravelers/Missions/RESERVATION';

// Action creators
export const reserveMissions = (id, status) => ({
  type: RESERVATION,
  mission: {
    id,
    status: Boolean(Number(status)),
  },
});

export const spaceMissions = (data) => ({
  type: SPACE_MISSIONS,
  payload: data,
});

// initial states
const initialState = [];

// reducer
const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPACE_MISSIONS:
      return [...state, action.data];

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
