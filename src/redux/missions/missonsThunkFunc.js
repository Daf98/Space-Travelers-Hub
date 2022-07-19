import { createAsyncThunk } from '@reduxjs/toolkit';
import spaceMissions from './missions';

const ADD_SPACE_MISSIONS = 'SpaceTravelers/Missions/ADD_SPACE_MISSIONS';

// get mission state
const showSpaceMissions = createAsyncThunk(
  ADD_SPACE_MISSIONS,
  async (dispatch) => {
    const response = await fetchMissionsFromAPI();
    dispatch(spaceMissions());
    return response;
  },
);

export default showSpaceMissions;
