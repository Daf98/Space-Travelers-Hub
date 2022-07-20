// Actions
const ROCKETS_FETCHED = 'space-travelers-hub/rockets/ROCKETS_FETCHED';
const ROCKETS_RESERVED = 'space-travelers-hub/rockets/ROCKETS_RESERVED';
const ROCKETS_CANCELLED = 'space-travelers-hub/rockets/ROCKETS_CANCELLED';

// Make actions creators
const fetchRocket = (payload) => ({
  type: ROCKETS_FETCHED,
  payload,
});

const reserveRocket = (id) => ({
  type: ROCKETS_RESERVED,
  id,
});

const cancelRocket = (id) => ({
  type: ROCKETS_CANCELLED,
  id,
});

const initialState = [];
let resState;

// Make reducer
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROCKETS_FETCHED:
      return action.payload;
    case ROCKETS_RESERVED:
      resState = state.map((item) => {
        if (item.id !== action.id) return item;
        return { ...item, reserved: true };
      });
      return resState;
    case ROCKETS_CANCELLED:
      resState = state.map((item) => {
        if (item.id !== action.id) return item;
        return { ...item, reserved: false };
      });
      return resState;
    default:
      return state;
  }
};

export default rocketsReducer;
export { fetchRocket, reserveRocket, cancelRocket };
