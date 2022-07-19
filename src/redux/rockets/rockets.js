// Actions
const ROCKETS_FETCHED = 'space-travelers-hub/rockets/ROCKETS_FETCHED';
const ROCKETS_RESERVED = 'space-travelers-hub/rockets/ROCKETS_RESERVED';

// Make actions creators
const fetchRocket = (payload) => ({
  type: ROCKETS_FETCHED,
  payload,
});

const reserveRocket = (status) => ({
  type: ROCKETS_RESERVED,
  payload: status,
});

const initialState = [];

// Make reducer
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROCKETS_FETCHED:
      return [...state, action.payload];

    case ROCKETS_RESERVED:
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

export default { rocketsReducer, fetchRocket, reserveRocket };
