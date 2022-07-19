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
      return action.payload;
    case ROCKETS_RESERVED:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
export { fetchRocket, reserveRocket };
