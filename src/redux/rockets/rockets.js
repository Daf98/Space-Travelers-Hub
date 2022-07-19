// Actions
const ROCKETS_FETCHED = "space-travelers-hub/rockets/ROCKETS_FETCHED";
const ROCKETS_RESERVED = "space-travelers-hub/rockets/ROCKETS_RESERVED";

// Make actions creators
const fetchRocket = (payload) => ({
  type: ROCKETS_FETCHED,
  payload,
});

const reserveRocket = (payload) => ({
  type: ROCKETS_RESERVED,
  status: payload.active,
  id: payload.id,
});

const initialState = [];

// Make reducer
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROCKETS_FETCHED:
      return action.payload;
    case ROCKETS_RESERVED:
      if (action.status) {
        action.status = false;
      } else {
        action.status = true;
      }
      console.log(action.status);
      return action.status;
    default:
      return state;
  }
};

export default rocketsReducer;
export { fetchRocket, reserveRocket };
