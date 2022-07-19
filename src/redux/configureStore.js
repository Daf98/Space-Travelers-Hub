import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  Rockets: rocketsReducer,
  Missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
