import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
