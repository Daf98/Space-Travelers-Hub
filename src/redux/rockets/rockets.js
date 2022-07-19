// Actions
const ROCKETS_FETCHED = 'space-travelers-hub/rockets/ROCKETS_FETCHED';
const ROCKETS_RESERVED = 'space-travelers-hub/rockets/ROCKETS_RESERVED';

// Make actions creators
export const fetchRocket = (payload) => ({
  type: ROCKETS_FETCHED,
  payload,
});

export const reserveRocket = (status) => ({
  type: ROCKETS_RESERVED,
  payload: status,
});

const initialState = [];

// Make reducer
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROCKETS_FETCHED:
      return [...state, action.data];
    case ROCKETS_RESERVED:
return state;
    default:
      return state;
  }
};

export default rocketsReducer;
